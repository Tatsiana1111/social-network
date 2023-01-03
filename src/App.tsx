import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Header } from './ui/components/Header/Header'
import { FreeAccess } from './ui/pages/FreeAccess/FreeAccess'
import { PageNotFound } from './ui/pages/PageNotFound/PageNotFound'
import { ProfilePage } from './ui/pages/ProfilePage/ProfilePage'
import { Registration } from './ui/pages/RegistrationPage/Registration'
import { RequireAuth } from './ui/pages/RequireAuth/RequireAuth'
import { SignIn } from './ui/pages/SignInPage/SignIn'
import { GlobalStyle } from './ui/styles/global'

export const PATH = {
  profile: '/profile',
  signIn: '/signIn',
  registration: '/registration',
}

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.signIn} />} />
        <Route element={<RequireAuth />}>
          <Route path={PATH.profile} element={<ProfilePage />} />
        </Route>
        <Route element={<FreeAccess />}>
          <Route path={PATH.signIn} element={<SignIn />} />
          <Route path={PATH.registration} element={<Registration />} />
        </Route>
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </>
  )
}
