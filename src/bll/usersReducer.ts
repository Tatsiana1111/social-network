import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getUsersParamsType, userAPI, UserItemsType } from '../api/usersAPI'
import { RootState } from '../app/store'

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
   },
})

export const usersReducer = usersSlice.reducer
export const { setUsers, setTotalCount, setFetching, setCurrentPage } = usersSlice.actions

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
