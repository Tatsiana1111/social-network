import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { addPostAC, asyncProfileActions as profileActions } from '../bll/profileReducer'
import { CommentsDataType, PostDataType, profileAPI } from '../dal/profileAPI'
import { UserItemsType } from '../dal/usersAPI'

import { setAppStatusAC } from './appReducer'

export type CommentsStateType = {
   [key: number]: CommentsDataType[]
}

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
export const commentsSlice = createSlice({
   name: 'comments',
   initialState: {} as CommentsStateType,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(profileActions.getPostsTC.fulfilled, (state, action) => {
         if (action.payload.posts) {
            action.payload.posts.forEach((post: PostDataType) => {
               state[post.id] = []
            })
         }
      })
      builder.addCase(getCommentsTC.fulfilled, (state, action) => {
         if (action.payload) state[action.payload.postId] = action.payload.comments
      })
      builder.addCase(addCommentsTC.fulfilled, (state, action) => {
         if (action.payload.postId) state[action.payload.postId].push(action.payload)
      })
   },
})

export const addCommentsTC = createAsyncThunk(
   'comments/addComments',
   async (
      params: {
         postId: number | undefined
         body: string
         profileName: string
      },
      thunkAPI
   ) => {
      thunkAPI.dispatch(setAppStatusAC({ status: 'load' }))
      try {
         const res = await profileAPI.addComment({
            postId: params.postId,
            body: params.body,
            email: params.profileName,
         })

         thunkAPI.dispatch(setAppStatusAC({ status: 'idle' }))

         return res.data
      } catch (e) {
         console.log(e)
      }
   }
)
export const {} = commentsSlice.actions

export const commentsReducer = commentsSlice.reducer
