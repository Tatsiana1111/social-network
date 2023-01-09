import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { authAPI, LoginResponseType } from '../api/authAPI'

interface AuthReducerStateType {
  isLoggedIn: boolean
}

const initialState: AuthReducerStateType = {
  isLoggedIn: true,
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

export const LoginTC = createAsyncThunk('/auth/login', async (data: LoginResponseType) => {
  try {
    return authAPI.login(data)
  } catch (e) {
    console.log(e)
  }
})
