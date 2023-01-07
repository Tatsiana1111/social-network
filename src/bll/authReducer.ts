import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
