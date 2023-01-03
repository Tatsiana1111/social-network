import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '../../../App'

export const FreeAccess = () => {
  // const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const isLoggedIn = false

  if (isLoggedIn) return <Navigate to={PATH.profile} replace />

  return <Outlet />
}
