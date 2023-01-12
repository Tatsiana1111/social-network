import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { profileAPI, ProfileDataType } from '../api/profileAPI'

const profileSlice = createSlice({
   name: 'profile',
   initialState: { data: {} as ProfileDataType },
   reducers: {
      setProfileDataAC: (state, action: PayloadAction<ProfileDataType>) => {
         state.data = { ...action.payload }
      },
   },
})

export const { setProfileDataAC } = profileSlice.actions
export const profileReducer = profileSlice.reducer

export const getProfileData = createAsyncThunk(
   'profile/data',
   async (profileID: number, thunkAPI) => {
      try {
         const res = await profileAPI.getProfileData(profileID)

         thunkAPI.dispatch(setProfileDataAC(res.data))
      } catch (e) {
         console.log(e)
      }
   }
)
