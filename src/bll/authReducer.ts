import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { HandleServerAppError, HandleServerNetworkError } from '../common/Utils/errorHandler'
import { authAPI, LoginRequestDataType } from '../dal/authAPI'

import { initializeAppTC, setAppStatusAC } from './appReducer'

const initialState = {
   isLoggedIn: false as boolean,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setLoggedIn: (state, action: PayloadAction<{ value: boolean }>) => {
         state.isLoggedIn = action.payload.value
      },
   },
})

export const { setLoggedIn } = authSlice.actions
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
