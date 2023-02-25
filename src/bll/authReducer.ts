import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { HandleServerAppError, HandleServerNetworkError } from '../common/Utils/errorHandler'
import { authAPI, LoginRequestDataType } from '../dal/authAPI'

import { initializeAppTC, setAppStatusAC } from './appReducer'

const initialState = {
   isLoggedIn: false as boolean,
   captcha: null as null | string,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setLoggedIn: (state, action: PayloadAction<{ value: boolean }>) => {
         state.isLoggedIn = action.payload.value
      },
      getCaptchaSuccess: (state, action: PayloadAction<string | null>) => {
         state.captcha = action.payload
      },
   },
})

export const { setLoggedIn, getCaptchaSuccess } = authSlice.actions
export const authReducer = authSlice.reducer

// Thunk
export const LoginTC = createAsyncThunk(
   'auth/login',
   async (data: LoginRequestDataType, { dispatch }) => {
      dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await authAPI.login(data)

         if (res.data.resultCode === 0) {
            dispatch(setLoggedIn({ value: true }))
            dispatch(setAppStatusAC({ status: 'success' }))
            dispatch(initializeAppTC())
         } else {
            if (res.data.resultCode === 10) {
               dispatch(getCaptcha())
            }
            HandleServerAppError(dispatch, res.data)
         }
      } catch (e) {
         const error = e as AxiosError | Error

         HandleServerNetworkError(dispatch, error)
      }
   }
)

export const LogOutTC = createAsyncThunk('auth/logOut', async (arg, { dispatch }) => {
   try {
      const res = await authAPI.logOut()

      if (res.data.resultCode === 0) {
         dispatch(setLoggedIn({ value: false }))
      } else {
         HandleServerAppError(dispatch, res.data)
      }
   } catch (e) {
      const error = e as AxiosError | Error

      HandleServerNetworkError(dispatch, error)
   }
})

export const getCaptcha = createAsyncThunk('auth/captcha', async (arg, { dispatch }) => {
   try {
      const res = await authAPI.captcha()
      const captchaUrl = res.data.url

      dispatch(getCaptchaSuccess(captchaUrl))
   } catch (e) {
      const error = e as AxiosError | Error

      HandleServerNetworkError(dispatch, error)
   }
})
