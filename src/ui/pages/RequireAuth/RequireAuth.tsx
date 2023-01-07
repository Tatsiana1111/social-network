import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '../../../app/App'
import { useAppSelector } from '../../../app/hooks'

export const RequireAuth = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  if (!isLoggedIn) return <Navigate to={PATH.signIn} replace />

  return <Outlet />
}
