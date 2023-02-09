import { configureStore } from '@reduxjs/toolkit'

import { albumsReducer } from '../bll/albumsReducer'
import { appReducer } from '../bll/appReducer'
import { authReducer } from '../bll/authReducer'
import { commentsReducer } from '../bll/commentsReducer'
import { profileReducer } from '../bll/profileReducer'
import { usersReducer } from '../bll/usersReducer'
import { loadStateApp, saveState } from '../common/Utils/localStorage'

export const store = configureStore({
   reducer: {
      app: appReducer,
      users: usersReducer,
      profile: profileReducer,
      auth: authReducer,

      comments: commentsReducer,
      albums: albumsReducer,
   },
   preloadedState: {
      app: loadStateApp(),
   },
})

store.subscribe(() => {
   saveState(store.getState().app.theme)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
