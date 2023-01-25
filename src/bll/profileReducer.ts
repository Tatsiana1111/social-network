import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import {
   CommentsDataType,
   GetPostsParamsType,
   PostDataType,
   profileAPI,
   ProfileDataType,
} from '../dal/profileAPI'

import { setAppStatusAC } from './appReducer'

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
      } catch (e) {
         console.log(e)
      }
   }
)
export const getPostsTC = createAsyncThunk(
   'profile/getPosts',
   async (arg, { dispatch, getState }) => {
      dispatch(setAppStatusAC({ status: 'load' }))
      try {
         debugger
         const state = getState() as RootState
         const currentPage = state.profile.currentPage
         const res = await profileAPI.getPosts({ _page: currentPage, _limit: 10 })

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
         const res = await profileAPI.addPost({
            title: params.title,
            userId: params.userId,
            id: params.id,
            body: params.body,
         })

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
      } catch (e) {
         console.log(e)
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
