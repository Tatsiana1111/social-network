import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { authAPI, LoginRequestDataType } from '../dal/authAPI'

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
   async (data: LoginRequestDataType, thunkAPI) => {
      try {
         const res = await authAPI.login(data)

         if (res.data.resultCode === 0) {
            thunkAPI.dispatch(setLoggedIn({ value: true }))
         }
      } catch (e) {
         console.log(e)
      }
   }
)

export const LogOutTC = createAsyncThunk('auth/logOut', async (arg, thunkAPI) => {
   try {
      const res = await authAPI.logOut()

      if (res.data.resultCode === 0) {
         thunkAPI.dispatch(setLoggedIn({ value: false }))
      }
   } catch (e) {
      console.log(e)
   }
})