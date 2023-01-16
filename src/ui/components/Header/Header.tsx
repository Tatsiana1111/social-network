import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { LogOutTC } from '../../../bll/authReducer'
import LogOutIcon from '../../../common/icons/LogOut.svg'
import { Container } from '../../theme/global'

import { SHeader, SHeaderInner } from './styled'

export const Header = () => {
   const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
   const dispatch = useAppDispatch()

   return (
      <SHeader>
         <Container>
            <SHeaderInner>
               <h1>lightels</h1>
               {isLoggedIn ? (
                  <img alt={LogOutIcon} src={LogOutIcon} onClick={() => dispatch(LogOutTC())} />
               ) : (
                  <div>
                     <button>Sign in</button>
                     <button>Registration</button>
                  </div>
               )}
            </SHeaderInner>
         </Container>
      </SHeader>
   )
}
