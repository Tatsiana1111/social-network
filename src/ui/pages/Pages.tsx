import React from 'react'

import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'

import { Layout } from './Layout/Layout'
import { PageNotFound } from './PageNotFound/PageNotFound'
import { ProfilePage } from './ProfilePage/ProfilePage'
import { Registration } from './RegistrationPage/Registration'
import { SignIn } from './SignInPage/SignIn'
import { UsersPage } from './Users/UsersPage'

export const PATH = {
   profile: '/profile/:profileID',
   signIn: '/signIn',
   registration: '/registration',
   users: '/users',
}

export const Pages = () => {
   const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
   // const profileID = useAppSelector(state => state.app.profileID)
   const RequireAuth = () => {
      if (!isLoggedIn) return <Navigate to={PATH.signIn} replace />

      return <Outlet />
   }
   const LoginRoute = () => {
      if (isLoggedIn) return <Navigate to={PATH.profile} replace />

      return <Outlet />
   }

   return (
      <Routes>
         <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
               <Route path={PATH.profile} element={<ProfilePage />} />
               <Route path={PATH.users} element={<UsersPage />} />
            </Route>
         </Route>
         <Route element={<LoginRoute />}>
            <Route path={PATH.signIn} element={<SignIn />} />
            <Route path={PATH.registration} element={<Registration />} />
         </Route>
         <Route path={'/'} element={<Navigate to={PATH.signIn} />} />
         <Route path={'*'} element={<PageNotFound />} />
      </Routes>
   )
}
