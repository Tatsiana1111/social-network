import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '../../../App'

export const RequireAuth = () => {
  // const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isLoggedIn = false

  if (!isLoggedIn) return <Navigate to={PATH.signIn} replace />

  return <Outlet />
}
