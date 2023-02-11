import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios/index'

import { RootState } from '../app/store'
import { HandleServerNetworkError } from '../common/Utils/errorHandler'
import { albumsAPI, AlbumsType, PhotosType } from '../dal/albumsAPI'

const initialState = {
   albums: [] as AlbumsType[],
   fetchAlbums: false as boolean,
   currentPageAlbum: 1 as number,
   photos: [] as PhotosType[],
   currentPagePhotos: 1 as number,
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
      setPhotosAC: (state, action: PayloadAction<{ photos: PhotosType[] }>) => {
         state.photos = [...state.photos, ...action.payload.photos]
      },
      setPhotosCurrentPagesAC: (state, action: PayloadAction<{ newCurrentPage: number }>) => {
         state.currentPagePhotos = action.payload.newCurrentPage
      },
   },
})

export const {
   setAlbumsAC,
   setFetchAlbumsAC,
   setAlbumsCurrentPagesAC,
   setPhotosCurrentPagesAC,
   setPhotosAC,
} = albumsSlice.actions
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
      const error = e as AxiosError | Error

      HandleServerNetworkError(thunkAPI.dispatch, error)
   }
})

export const getPhotosTC = createAsyncThunk(
   'albums/getPhotos',
   async (albumId: number, thunkAPI) => {
      try {
         const state = thunkAPI.getState() as RootState
         const currentPagePhotos = state.albums.currentPagePhotos

         const res = await albumsAPI.getPhotos(albumId, { _page: currentPagePhotos, _limit: 10 })

         thunkAPI.dispatch(setPhotosAC({ photos: res.data }))
         thunkAPI.dispatch(setPhotosCurrentPagesAC({ newCurrentPage: currentPagePhotos + 1 }))
      } catch (e) {
         const error = e as AxiosError | Error

         HandleServerNetworkError(thunkAPI.dispatch, error)
      }
   }
)
