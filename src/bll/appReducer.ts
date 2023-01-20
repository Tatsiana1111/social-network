import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { authAPI } from '../dal/authAPI'

import { setLoggedIn } from './authReducer'

type AppStatusType = 'idle' | 'load' | 'success' | 'error'

const initialState = {
   isInitialized: false as boolean,
   profileID: 0 as number,
   status: 'idle' as AppStatusType,
}
const appSlice = createSlice({
   name: 'app',
   initialState,
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
   },
})

export const { setInitializationAC, setProfileID, setAppStatusAC } = appSlice.actions

export const appReducer = appSlice.reducer

export const initializeAppTC = createAsyncThunk('auth/me', async (arg, thunkAPI) => {
   try {
      const res = await authAPI.me()

      if (res.data.resultCode === 0) {
         thunkAPI.dispatch(setLoggedIn({ value: true }))
         thunkAPI.dispatch(setProfileID({ userID: res.data.data.id }))
      }
   } catch (e) {
      console.log(e)
   } finally {
      thunkAPI.dispatch(setInitializationAC({ value: true }))
   }
})