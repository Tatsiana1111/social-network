import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { getUsersParamsType, userAPI, UserItemsType } from '../dal/usersAPI'

const initialState = {
   users: [] as UserItemsType[],
   totalCount: 0 as number,
   isFetching: true as boolean,
   queryParams: { page: '1', term: '' } as getUsersParamsType,
}

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUsersAC: (state, action: PayloadAction<{ users: UserItemsType[] }>) => {
         // console.log(state.users[0]?.name.slice(0, state.queryParams.term?.length))
         // console.log(action.payload.users[0]?.name.slice(0, state.queryParams.term?.length))

         if (
            state.queryParams.term &&
            state.users.length > 0 &&
            state.users[0].name.slice(0, state.queryParams.term.length).toLowerCase() ===
               action.payload.users[0].name.slice(0, state.queryParams.term.length).toLowerCase()
         ) {
            state.users = [...state.users, ...action.payload.users]
         } else {
            state.users = [...action.payload.users]
         }
      },

      setTotalCountAC: (state, action: PayloadAction<{ totalCount: number }>) => {
         state.totalCount = action.payload.totalCount
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
      updateUrlParamsAC: (state, action: PayloadAction<{ query: getUsersParamsType }>) => {
         state.queryParams = action.payload.query
      },
   },
})

export const usersReducer = usersSlice.reducer
export const {
   setUsersAC,
   setTotalCountAC,
   setFetchingAC,
   followUserAC,
   unFollowUserAC,
   updateUrlParamsAC,
} = usersSlice.actions

export const getUsersTC = createAsyncThunk('users/getUsers', async (arg, thunkAPI) => {
   try {
      const state = thunkAPI.getState() as RootState
      const params = state.users.queryParams

      const res = await userAPI.getUsers(params)

      thunkAPI.dispatch(setUsersAC({ users: res.data.items }))

      thunkAPI.dispatch(setFetchingAC({ isFetching: false }))
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
