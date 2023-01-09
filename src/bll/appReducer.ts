import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isInitialized: false as boolean,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitializationAC: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isInitialized = action.payload.value
    },
  },
})

export const { setInitializationAC } = appSlice.actions
export const appReducer = appSlice.reducer
