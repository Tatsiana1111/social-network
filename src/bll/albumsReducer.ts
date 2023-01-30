import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { AlbumsType } from '../dal/albumsAPI'

export const albumsSlice = createSlice({
   name: 'albums',
   initialState: { albums: [] as AlbumsType[] },
   reducers: {
      setAlbumsAC: () => {},
   },
})

export const { setAlbumsAC } = albumsSlice.actions
export const albumsReducer = albumsSlice.reducer

export const getAlbumsTC = createAsyncThunk('albums/getAlbums', async (arg, thunkAPI) => {
   try {
      console.log()
   } catch (e) {
      console.log(e)
   }
})
