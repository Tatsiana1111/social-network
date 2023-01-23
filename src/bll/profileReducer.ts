import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { GetPostsParamsType, PostDataType, profileAPI, ProfileDataType } from '../dal/profileAPI'

import { setAppStatusAC } from './appReducer'

const profileSlice = createSlice({
   name: 'profile',
   initialState: {
      data: {} as ProfileDataType,
      status: '' as string,
      posts: [] as PostDataType[],
      currentPage: 1 as number,
      fetch: true as boolean,
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
   'profile/posts',
   async (params: GetPostsParamsType, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.getPosts(params)
         const state = thunkAPI.getState() as RootState
         const currentPage = state.profile.currentPage

         thunkAPI.dispatch(setCurrentPagesAC({ newCurrentPage: currentPage + 1 }))
         thunkAPI.dispatch(setPostsDataAC(res.data))
         thunkAPI.dispatch(setFetchingAC({ fetch: false }))
         thunkAPI.dispatch(setTotalCountAC({ totalCount: Number(res.headers['x-total-count']) }))
         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))
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
