import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getPostsDataType, PostDataType, profileAPI, ProfileDataType } from '../dal/profileAPI'

import { setAppStatusAC } from './appReducer'

const profileSlice = createSlice({
   name: 'profile',
   initialState: { data: {} as ProfileDataType, status: '' as string, posts: [] as PostDataType[] },
   reducers: {
      setProfileDataAC: (state, action: PayloadAction<ProfileDataType>) => {
         state.data = { ...action.payload }
         //TODO check spreed operator
      },
      setPostsDataAC: (state, action: PayloadAction<PostDataType[]>) => {
         state.posts = [...action.payload]
      },
      setProfileStatus: (state, action: PayloadAction<string>) => {
         state.status = action.payload
      },
   },
})

export const { setProfileDataAC, setProfileStatus, setPostsDataAC } = profileSlice.actions
export const profileReducer = profileSlice.reducer

export const getProfileData = createAsyncThunk(
   'profile/data',
   async (profileID: number, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.getProfileData(profileID)

         thunkAPI.dispatch(setProfileDataAC(res.data))
         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
      } catch (e) {
         console.log(e)
      }
   }
)
export const getStatus = createAsyncThunk('profile/status', async (profileID: number, thunkAPI) => {
   thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
   try {
      const res = await profileAPI.getStatus(profileID)

      thunkAPI.dispatch(setProfileStatus(res.data))
      thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
   } catch (e) {
      console.log(e)
   }
})
export const updateStatus = createAsyncThunk(
   'profile/updateStatus',
   async (status: string, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.updateStatus(status)

         thunkAPI.dispatch(setProfileStatus(status))
         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
      } catch (e) {
         console.log(e)
      }
   }
)
export const getPostsTC = createAsyncThunk(
   'profile/posts',
   async (params: getPostsDataType, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.getPosts()

         thunkAPI.dispatch(setPostsDataAC(res.data))
         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
      } catch (e) {
         console.log(e)
      }
   }
)
// export const updateProfile = createAsyncThunk(
//    'profile/updateAboutMe',
//    async (profile: ProfileDataType, thunkAPI) => {
//       thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
//       try {
//          const res = await profileAPI.updateProfile(profile)
//
//          thunkAPI.dispatch(setProfileDataAC(res.data))
//          thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
//       } catch (e) {
//          console.log(e)
//       }
//    }
// )
