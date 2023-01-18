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
      setUsers: (state, action: PayloadAction<{ users: UserItemsType[] }>) => {
         state.users = [...state.users, ...action.payload.users]
      },
      setTotalCount: (state, action: PayloadAction<{ totalCount: number }>) => {
         state.totalCount = action.payload.totalCount
      },
      setCurrentPage: (state, action: PayloadAction<{ page: number }>) => {
         state.currentPage = action.payload.page
      },
      setFetching: (state, action: PayloadAction<{ isFetching: boolean }>) => {
         state.isFetching = action.payload.isFetching
      },
      followUser: (state, action: PayloadAction<{ userID: number }>) => {
         const index = state.users.findIndex(user => user.id === action.payload.userID)

         if (index > -1) {
            state.users[index].followed = true
         }
      },
      unFollowUser: (state, action: PayloadAction<{ userID: number }>) => {
         const index = state.users.findIndex(user => user.id === action.payload.userID)

         if (index > -1) {
            state.users[index].followed = false
         }
      },
      // followUser: (state, action: PayloadAction<{ profileID: number }>) => {
      //    state.users.map(user => {
      //       if (user.id === action.payload.profileID) {
      //          return (user.followed = true)
      //       }
      //    })
      // },
      // unfollowUser: (state, action: PayloadAction<{ profileID: number }>) => {
      //    state.users.map(user => {
      //       if (user.id === action.payload.profileID) {
      //          return (user.followed = false)
      //       }
      //    })
      // },
   },
})

export const usersReducer = usersSlice.reducer
export const { setUsers, setTotalCount, setFetching, setCurrentPage, followUser, unFollowUser } =
   usersSlice.actions

export const getUsersTC = createAsyncThunk(
   'users/getUsers',
   async (params: getUsersParamsType, thunkAPI) => {
      try {
         const res = await userAPI.getUsers(params)
         const state = thunkAPI.getState() as RootState
         const currentPage = state.users.currentPage

         thunkAPI.dispatch(setUsers({ users: res.data.items }))
         thunkAPI.dispatch(setCurrentPage({ page: currentPage + 1 }))
         thunkAPI.dispatch(setFetching({ isFetching: false }))
         thunkAPI.dispatch(setTotalCount({ totalCount: res.data.totalCount }))
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

         thunkAPI.dispatch(followUser({ userID: userId }))
      } catch (e) {
         console.log(e)
      }
   }
)
export const unfollowUserTC = createAsyncThunk(
   'users/unFollowUser',
   async (userId: number, thunkAPI) => {
      try {
         await userAPI.unFollowUser(userId)

         thunkAPI.dispatch(unFollowUser({ userID: userId }))
      } catch (e) {
         console.log(e)
      }
   }
)
