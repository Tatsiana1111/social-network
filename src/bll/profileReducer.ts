import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { PostDataType, profileAPI, ProfileDataType, ProfileDataTypePhotos } from '../dal/profileAPI'

import { SetAppNotificationAC, setAppStatusAC } from './appReducer'

export const profileSlice = createSlice({
   name: 'profile',
   initialState: {
      data: {} as ProfileDataType,
      status: '' as string,
      posts: [] as PostDataType[],
      currentPage: 1 as number,
      fetch: false as boolean,
      totalCount: 0 as number | undefined,
   },

   reducers: {
      setProfileDataAC: (state, action: PayloadAction<ProfileDataType>) => {
         state.data = { ...action.payload }
         //TODO check spreed operator
      },
      setPostsDataAC: (state, action: PayloadAction<PostDataType[]>) => {
         state.posts = [...state.posts, ...action.payload]
      },
      setProfileStatus: (state, action: PayloadAction<string>) => {
         state.status = action.payload
      },
      setCurrentPagesAC: (state, action: PayloadAction<{ newCurrentPage: number }>) => {
         state.currentPage = action.payload.newCurrentPage
      },
      setFetchingAC: (state, action: PayloadAction<{ fetch: boolean }>) => {
         state.fetch = action.payload.fetch
      },
      setTotalCountAC: (state, action: PayloadAction<{ totalCount: number | undefined }>) => {
         state.totalCount = action.payload?.totalCount
      },
      addPostAC: (state, action: PayloadAction<{ newPost: PostDataType }>) => {
         state.posts.unshift(action.payload.newPost)
      },
      updateProfileAC: (state, action) => {
         state.data = action.payload.data
      },
      updatePhotoAC: (state, action: PayloadAction<ProfileDataTypePhotos>) => {
         state.data.photos = action.payload
      },
   },
})

export const {
   setProfileDataAC,
   setProfileStatus,
   setPostsDataAC,
   setCurrentPagesAC,
   setFetchingAC,
   setTotalCountAC,
   addPostAC,
   updatePhotoAC,
} = profileSlice.actions
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
         await profileAPI.updateStatus(status)

         thunkAPI.dispatch(setProfileStatus(status))
         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
         thunkAPI.dispatch(
            SetAppNotificationAC({
               notifications: {
                  type: 'success',
                  message: `Your status was successfully changed`,
               },
            })
         )
      } catch (e) {
         thunkAPI.dispatch(
            SetAppNotificationAC({
               notifications: {
                  type: 'error',
                  message: `Something went wrong, i couldn't changed it`,
               },
            })
         )
      }
   }
)
export const getPostsTC = createAsyncThunk(
   'profile/getPosts',
   async (arg, { dispatch, getState }) => {
      dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const state = getState() as RootState
         const currentPage = state.profile.currentPage
         const res = await profileAPI.getPosts({ _page: currentPage, _limit: 2 })

         dispatch(setCurrentPagesAC({ newCurrentPage: currentPage + 1 }))
         dispatch(setPostsDataAC(res.data))
         dispatch(setFetchingAC({ fetch: true }))
         dispatch(setTotalCountAC({ totalCount: res.data.totalCount }))
         dispatch(setAppStatusAC({ status: 'idle' }))

         return res.data
      } catch (e) {
         console.log(e)
      }
   }
)
export const addPostTC = createAsyncThunk(
   'profile/addPost',
   async (params: PostDataType, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.addPost(params)

         thunkAPI.dispatch(
            addPostAC({
               newPost: {
                  id: res.data.id,
                  title: res.data.title,
                  body: res.data.body,
                  userId: res.data.userId,
               },
            })
         )
         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))

         return {
            newPost: {
               id: res.data.id,
               title: res.data.title,
               body: res.data.body,
               userId: res.data.userId,
            },
         }
      } catch (e) {
         console.log(e)
      }
   }
)
export const updatePhoto = createAsyncThunk(
   'profile/updatePhoto',
   async (photos: any, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.updatePhoto(photos)

         thunkAPI.dispatch(updatePhotoAC(res.data.data.photos))
         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
         thunkAPI.dispatch(
            SetAppNotificationAC({
               notifications: {
                  type: 'success',
                  message: `Your photo was successfully changed`,
               },
            })
         )
      } catch (e) {
         thunkAPI.dispatch(
            SetAppNotificationAC({
               notifications: {
                  type: 'error',
                  message: `Something went wrong, i couldn't changed it`,
               },
            })
         )
      }
   }
)

export const asyncProfileActions = {
   addPostTC,
   getPostsTC,
   updateStatus,
   getProfileData,
   getStatus,
}
export const updateProfile = createAsyncThunk(
   'profile/updateAboutMe',
   async (profile: ProfileDataType, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.updateProfile(profile)

         thunkAPI.dispatch(setProfileDataAC(res.data))
         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
      } catch (e) {
         console.log(e)
      }
   }
)
