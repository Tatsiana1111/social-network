import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Header } from './ui/components/Header/Header'
import { NavigationForUs } from './ui/components/NavigationForUs/NavigationForUs'
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
      <NavigationForUs />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path={PATH.profile} element={<ProfilePage />} />
        </Route>
        <Route path={PATH.signIn} element={<SignIn />} />
        <Route path={PATH.registration} element={<Registration />} />
        <Route path={'/'} element={<Navigate to={PATH.signIn} />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </>
  )
}
