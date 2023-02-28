import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { RootState } from '../app/store'
import { HandleServerNetworkError } from '../common/Utils/errorHandler'
import { getUsersParamsType, userAPI, UserItemsType } from '../dal/usersAPI'

import { SetAppNotificationAC } from './appReducer'

const initialState = {
   users: [] as UserItemsType[],
   usersSearch: [] as UserItemsType[],
   totalCount: 0 as number,
   hasMore: false as boolean,
   queryParams: { page: '1', term: '', friend: 'false' } as getUsersParamsType,
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
      resetUsersState: state => {
         state.users = []
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
   resetUsersState,
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
      const error = e as AxiosError | Error

      HandleServerNetworkError(thunkAPI.dispatch, error)
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
                  message: `${user?.name} was successfully followed`,
               },
            })
         )
      } catch (e) {
         const error = e as AxiosError | Error

         HandleServerNetworkError(thunkAPI.dispatch, error)
      }
   }
)
export const unFollowUserTC = createAsyncThunk(
   'users/unFollowUser',
   async (userId: number, { dispatch }) => {
      try {
         await userAPI.unFollowUser(userId)

         dispatch(unFollowUserAC({ userID: userId }))
      } catch (e) {
         const error = e as AxiosError | Error

         HandleServerNetworkError(dispatch, error)
      }
   }
)
