import React from 'react'

import { Link } from 'react-router-dom'

import { PATH } from '../../pages/Pages'

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
