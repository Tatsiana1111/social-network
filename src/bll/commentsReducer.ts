import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { addPostTC, asyncProfileActions as profileActions, getPostsTC } from '../bll/profileReducer'
import { CommentsDataType, PostDataType, profileAPI } from '../dal/profileAPI'

import { setAppStatusAC } from './appReducer'

export type CommentsStateType = {
   [key: number]: CommentsDataType[]
}

export const commentsSlice = createSlice({
   name: 'comments',
   initialState: {} as Record<number, CommentsDataType[]>,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(getPostsTC.fulfilled, (state, action) => {
         if (action.payload.posts) {
            action.payload.posts.forEach((post: PostDataType) => {
               state[post.id] = []
            })
         }
      })
      builder.addCase(addPostTC.fulfilled, (state, action) => {
         state[action?.payload?.newPost.id] = []
      })
      builder.addCase(getCommentsTC.fulfilled, (state, action) => {
         if (action.payload) state[action.payload.postId] = action.payload.comments
      })
      builder.addCase(addCommentsTC.fulfilled, (state, action) => {
         if (action.payload.postId) {
            state[action.payload.postId].push(action.payload)
         }
      })
   },
})
export const {} = commentsSlice.actions
export const commentsReducer = commentsSlice.reducer

export const getCommentsTC = createAsyncThunk(
   'comments/getComments',
   async (postId: number, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.getComments(postId)
         const comments: CommentsDataType[] = res.data

         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))

         return { postId, comments }
      } catch (e) {
         return console.log(e)
      }
   }
)
export const addCommentsTC = createAsyncThunk(
   'comments/addComments',
   async (data: CommentsDataType, thunkAPI) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.addComment(data)

         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))

         return res.data
      } catch (e) {
         console.log(e)
      }
   }
)
