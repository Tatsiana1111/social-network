import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { getUsersParamsType, userAPI, UserItemsType } from '../dal/usersAPI'

import { SetAppNotificationAC } from './appReducer'

const initialState = {
   users: [] as UserItemsType[],
   usersSearch: [] as UserItemsType[],
   totalCount: 0 as number,
   hasMore: false as boolean,
   queryParams: { page: '1', term: '' } as getUsersParamsType,
}

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUsersAC: (state, action: PayloadAction<{ users: UserItemsType[]; query: string }>) => {
         if (action.payload.query.length > 0) {
            state.users = []
         } else {
            state.users = [...state.users, ...action.payload.users]
         }
      },
      setUsersSearchAC: (
         state,
         action: PayloadAction<{ users: UserItemsType[]; query: string }>
      ) => {
         if (action.payload.query.length > 0) {
            state.usersSearch = [...state.usersSearch, ...action.payload.users]
         } else {
            state.usersSearch = []
         }
      },

      setTotalCountAC: (state, action: PayloadAction<{ totalCount: number }>) => {
         state.totalCount = action.payload.totalCount
      },
      setHasMoreAC: (state, action: PayloadAction<{ hasMore: boolean }>) => {
         state.hasMore = action.payload.hasMore
      },
      followUserAC: (state, action: PayloadAction<{ userID: number }>) => {
         if (state.users.length) {
            const index = state.users.findIndex(user => user.id === action.payload.userID)

            if (index > -1) {
               state.users[index].followed = true
            }
         } else {
            const index = state.usersSearch.findIndex(user => user.id === action.payload.userID)

            if (index > -1) {
               state.usersSearch[index].followed = true
            }
         }
      },
      unFollowUserAC: (state, action: PayloadAction<{ userID: number }>) => {
         if (state.users.length) {
            const index = state.users.findIndex(user => user.id === action.payload.userID)

            if (index > -1) {
               state.users[index].followed = false
            }
         } else {
            const index = state.usersSearch.findIndex(user => user.id === action.payload.userID)

            if (index > -1) {
               state.usersSearch[index].followed = false
            }
         }
      },
      updateUrlParamsAC: (state, action: PayloadAction<{ query: getUsersParamsType }>) => {
         state.queryParams = action.payload.query
      },
   },
})

export const usersReducer = usersSlice.reducer
export const {
   setUsersAC,
   setTotalCountAC,
   setHasMoreAC,
   followUserAC,
   unFollowUserAC,
   updateUrlParamsAC,
   setUsersSearchAC,
} = usersSlice.actions

export const getUsersTC = createAsyncThunk('users/getUsers', async (arg, thunkAPI) => {
   try {
      const state = thunkAPI.getState() as RootState
      const params = state.users.queryParams

      const res = await userAPI.getUsers(params)

      thunkAPI.dispatch(
         setUsersAC({ users: res.data.items, query: params.term ? params.term : '' })
      )
      thunkAPI.dispatch(
         setUsersSearchAC({ users: res.data.items, query: params.term ? params.term : '' })
      )
      thunkAPI.dispatch(setHasMoreAC({ hasMore: true }))
      thunkAPI.dispatch(setTotalCountAC({ totalCount: res.data.totalCount }))
   } catch (e) {
      console.log(e)
   }
})
export const followUserTC = createAsyncThunk(
   'users/followUser',
   async (userId: number, thunkAPI) => {
      try {
         await userAPI.followUser(userId)

         thunkAPI.dispatch(followUserAC({ userID: userId }))
         const state = thunkAPI.getState() as RootState
         const user = state.users.users.find(user => user.id === userId)

         thunkAPI.dispatch(
            SetAppNotificationAC({
               notifications: {
                  type: 'success',
                  message: `${user?.name} \n was successfully followed`, //TODO line break when concatenating js https://puzzleweb.ru/javascript/5_types4.php
               },
            })
         )
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
