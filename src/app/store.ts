import { configureStore, Dispatch, Action } from '@reduxjs/toolkit'

import { albumsReducer } from '../bll/albumsReducer'
import { appReducer } from '../bll/appReducer'
import { authReducer } from '../bll/authReducer'
import { commentsReducer } from '../bll/commentsReducer'
import { asyncProfileActions, profileReducer } from '../bll/profileReducer'
import { usersReducer } from '../bll/usersReducer'
//https://www.appsloveworld.com/reactjs/100/30/local-storage-using-redux-toolkit

const localStorageMiddleware = (getState: any) => {
   return (next: any) => (action: any) => {
      const result = next(action)

      localStorage.setItem('appState', JSON.stringify(getState()))

      return result
   }
}

const reHydrateStore = () => {
   if (localStorage.getItem('appState') !== null) {
      return JSON.parse(JSON.stringify(localStorage.getItem('appState'))) // re-hydrate the store
   }
}

export const store = configureStore({
   reducer: {
      app: appReducer,
      users: usersReducer,
      profile: profileReducer,
      auth: authReducer,
      comments: commentsReducer,
      albums: albumsReducer,
   },
   preloadedState: reHydrateStore(),
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
