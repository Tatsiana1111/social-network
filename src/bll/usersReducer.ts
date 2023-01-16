import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { userAPI, UserItemsType } from '../api/usersAPI'

const initialState = {
   users: {} as UserItemsType[],
}

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUsers: (state, action: PayloadAction<{ users: UserItemsType[] }>) => {
         state.users = action.payload.users
      },
   },
})

export const usersReducer = usersSlice.reducer
export const { setUsers } = usersSlice.actions

export const getUsersTC = createAsyncThunk('users/getUsers', async (arg, thunkAPI) => {
   try {
      const res = await userAPI.getUsers({})

      thunkAPI.dispatch(setUsers({ users: res.data.items }))
   } catch (e) {
      console.log(e)
   }
})
