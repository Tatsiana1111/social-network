import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from '../bll/authReducer'

export const store = configureStore({
  reducer: {
    //app: appReducer,
    //dialogs: dialogsReducer,
    // users: usersReducer,
    //profile: profileReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
