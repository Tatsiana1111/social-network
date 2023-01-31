import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { albumsAPI, AlbumsType } from '../dal/albumsAPI'

const initialState = {
   albums: [] as AlbumsType[],
   fetchAlbums: false as boolean,
   currentPageAlbum: 1 as number,
}

export const albumsSlice = createSlice({
   name: 'albums',
   initialState,
   reducers: {
      setAlbumsAC: (state, action: PayloadAction<{ albums: AlbumsType[] }>) => {
         state.albums = [...state.albums, ...action.payload.albums]
      },
      setFetchAlbumsAC: (state, action: PayloadAction<{ fetchAlbums: boolean }>) => {
         state.fetchAlbums = action.payload.fetchAlbums
      },
      setAlbumsCurrentPagesAC: (state, action: PayloadAction<{ newCurrentPage: number }>) => {
         state.currentPageAlbum = action.payload.newCurrentPage
      },
   },
})

export const { setAlbumsAC, setFetchAlbumsAC, setAlbumsCurrentPagesAC } = albumsSlice.actions
export const albumsReducer = albumsSlice.reducer

//// Thunks
export const getAlbumsTC = createAsyncThunk('albums/getAlbums', async (arg, thunkAPI) => {
   try {
      const state = thunkAPI.getState() as RootState
      const currentPageAlbum = state.albums.currentPageAlbum
      const res = await albumsAPI.getAlbums({ _page: currentPageAlbum, _limit: 4 })

      thunkAPI.dispatch(setAlbumsAC({ albums: res.data }))
      thunkAPI.dispatch(setFetchAlbumsAC({ fetchAlbums: true }))
      thunkAPI.dispatch(setAlbumsCurrentPagesAC({ newCurrentPage: currentPageAlbum + 1 }))
   } catch (e) {
      console.log(e)
   }
})
