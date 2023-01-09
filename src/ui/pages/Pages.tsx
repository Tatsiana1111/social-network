import React from 'react'

import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'

import { PageNotFound } from './PageNotFound/PageNotFound'
import { ProfilePage } from './ProfilePage/ProfilePage'
import { Registration } from './RegistrationPage/Registration'
import { SignIn } from './SignInPage/SignIn'

export const PATH = {
   profile: '/profile',

   signIn: '/signIn',
   registration: '/registration',
}

export const Pages = () => {
   const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

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
            <Route path={PATH.profile} element={<ProfilePage />} />
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
