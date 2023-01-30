import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { albumsAPI, AlbumsType } from '../dal/albumsAPI'

const initialState = {
   albums: [] as AlbumsType[],
   fetchAlbums: false as boolean,
}

export const albumsSlice = createSlice({
   name: 'albums',
   initialState,
   reducers: {
      setAlbumsAC: (state, action: PayloadAction<{ albums: AlbumsType[] }>) => {
         state.albums = [...action.payload.albums]
      },
      setFetchAlbumsAC: (state, action: PayloadAction<{ fetchAlbums: boolean }>) => {
         state.fetchAlbums = action.payload.fetchAlbums
      },
   },
})

export const { setAlbumsAC, setFetchAlbumsAC } = albumsSlice.actions
export const albumsReducer = albumsSlice.reducer

//// Thunks
export const getAlbumsTC = createAsyncThunk('albums/getAlbums', async (arg, thunkAPI) => {
   try {
      const res = await albumsAPI.getAlbums({ _limit: 4 })

      thunkAPI.dispatch(setAlbumsAC({ albums: res.data }))
      thunkAPI.dispatch(setFetchAlbumsAC({ fetchAlbums: true }))
   } catch (e) {
      console.log(e)
   }
})
