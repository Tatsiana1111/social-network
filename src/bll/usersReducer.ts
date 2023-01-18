import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { getUsersParamsType, userAPI, UserItemsType } from '../dal/usersAPI'

const initialState = {
   users: [] as UserItemsType[],
   totalCount: 0 as number,
   currentPage: 1 as number,
   isFetching: true as boolean,
}

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUsersAC: (state, action: PayloadAction<{ users: UserItemsType[] }>) => {
         state.users = [...state.users, ...action.payload.users]
      },
      setTotalCountAC: (state, action: PayloadAction<{ totalCount: number }>) => {
         state.totalCount = action.payload.totalCount
      },
      setCurrentPageAC: (state, action: PayloadAction<{ page: number }>) => {
         state.currentPage = action.payload.page
      },
      setFetchingAC: (state, action: PayloadAction<{ isFetching: boolean }>) => {
         state.isFetching = action.payload.isFetching
      },
      followUserAC: (state, action: PayloadAction<{ userID: number }>) => {
         const index = state.users.findIndex(user => user.id === action.payload.userID)

         if (index > -1) {
            state.users[index].followed = true
         }
      },
      unFollowUserAC: (state, action: PayloadAction<{ userID: number }>) => {
         const index = state.users.findIndex(user => user.id === action.payload.userID)

         if (index > -1) {
            state.users[index].followed = false
         }
      },
   },
})

export const usersReducer = usersSlice.reducer
export const {
   setUsersAC,
   setTotalCountAC,
   setFetchingAC,
   setCurrentPageAC,
   followUserAC,
   unFollowUserAC,
} = usersSlice.actions

export const getUsersTC = createAsyncThunk(
   'users/getUsers',
   async (params: getUsersParamsType, thunkAPI) => {
      try {
         const res = await userAPI.getUsers(params)
         const state = thunkAPI.getState() as RootState
         const currentPage = state.users.currentPage

         thunkAPI.dispatch(setUsersAC({ users: res.data.items }))
         thunkAPI.dispatch(setCurrentPageAC({ page: currentPage + 1 }))
         thunkAPI.dispatch(setFetchingAC({ isFetching: false }))
         thunkAPI.dispatch(setTotalCountAC({ totalCount: res.data.totalCount }))
      } catch (e) {
         console.log(e)
      }
   }
)
export const followUserTC = createAsyncThunk(
   'users/followUser',
   async (userId: number, thunkAPI) => {
      try {
         await userAPI.followUser(userId)

         thunkAPI.dispatch(followUserAC({ userID: userId }))
      } catch (e) {
         console.log(e)
      }
   }
)
export const unFollowUserTC = createAsyncThunk(
   'users/unFollowUser',
   async (userId: number, thunkAPI) => {
      try {
         await userAPI.unFollowUser(userId)

         thunkAPI.dispatch(unFollowUserAC({ userID: userId }))
      } catch (e) {
         console.log(e)
      }
   }
)
