import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { HandleServerAppError, HandleServerNetworkError } from '../common/Utils/errorHandler'
import { GenerateId } from '../common/Utils/generateID'
import { authAPI } from '../dal/authAPI'

import { setLoggedIn } from './authReducer'

type AppStatusType = 'idle' | 'load' | 'success' | 'error'

export type AppThemeType = 'light' | 'dark'

export type NotificationType = {
   message: string
   type: 'success' | 'error'
   id: string
}
export const appReducerInitialState = {
   isInitialized: false as boolean,
   profileID: 0 as number,
   status: 'idle' as AppStatusType,
   theme: 'light' as AppThemeType,
   notifications: [] as NotificationType[],
   isBurgerOpen: false as boolean,
}
const appSlice = createSlice({
   name: 'app',
   initialState: appReducerInitialState,
   reducers: {
      setInitializationAC: (state, action: PayloadAction<{ value: boolean }>) => {
         state.isInitialized = action.payload.value
      },
      setProfileID: (state, action: PayloadAction<{ userID: number }>) => {
         state.profileID = action.payload.userID
      },
      setAppStatusAC: (state, action: PayloadAction<{ status: AppStatusType }>) => {
         state.status = action.payload.status
      },
      setAppThemeAC: (state, action: PayloadAction<{ theme: AppThemeType }>) => {
         state.theme = action.payload.theme
      },
      SetAppNotificationAC: (
         state,
         action: PayloadAction<{ notifications: Omit<NotificationType, 'id'> }>
      ) => {
         const id = GenerateId()

         state.notifications.push({ ...action.payload.notifications, id })
      },
      RemoveAppNotificationAC: (state, action: PayloadAction<{ id: string }>) => {
         const index = state.notifications.findIndex(index => index.id === action.payload.id)

         if (index > -1) {
            state.notifications.splice(index, 1)
         }
      },
      setIsBurgerOpenAC: (state, action: PayloadAction<{ value: boolean }>) => {
         state.isBurgerOpen = action.payload.value
      },
   },
})

export const {
   setInitializationAC,
   setProfileID,
   setAppStatusAC,
   setAppThemeAC,
   SetAppNotificationAC,
   RemoveAppNotificationAC,
   setIsBurgerOpenAC,
} = appSlice.actions

export const appReducer = appSlice.reducer

export const initializeAppTC = createAsyncThunk('auth/me', async (arg, thunkAPI) => {
   try {
      const res = await authAPI.me()

      if (res.data.resultCode === 0) {
         thunkAPI.dispatch(setLoggedIn({ value: true }))
         thunkAPI.dispatch(setProfileID({ userID: res.data.data.id }))
      } else {
         HandleServerAppError(thunkAPI.dispatch, res.data)
         thunkAPI.dispatch(setInitializationAC({ value: true }))
      }
   } catch (e) {
      const error = e as AxiosError | Error

      HandleServerNetworkError(thunkAPI.dispatch, error)
      thunkAPI.dispatch(setInitializationAC({ value: true }))
   } finally {
      thunkAPI.dispatch(setInitializationAC({ value: true }))
   }
})
