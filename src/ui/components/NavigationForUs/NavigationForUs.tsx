import React from 'react'

import { Link } from 'react-router-dom'

import { PATH } from '../../../app/App'

import { NavigationForUsWrapper } from './styled'

export const NavigationForUs = () => {
  return (
    <NavigationForUsWrapper>
      <Link to={PATH.signIn}>SignIn</Link>
      <Link to={PATH.profile}>Profile</Link>
      <Link to={PATH.registration}>Registration</Link>
    </NavigationForUsWrapper>
  )
}