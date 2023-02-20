import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { LogOutTC } from '../../../bll/authReducer'
import LogOutIcon from '../../../common/icons/LogOut.svg'
import { Container } from '../../theme/global'
import { Burger } from '../Burger/Burger'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'

import { SHeader, SHeaderInner } from './styled'

export const Header = () => {
   const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
   const dispatch = useAppDispatch()

   const LogOutHandler = () => {
      dispatch(LogOutTC())
   }

   return (
      <SHeader>
         <Container>
            <SHeaderInner>
               {isLoggedIn && <Burger />}
               <h1>lightels</h1>
               <ThemeSwitcher />
               {isLoggedIn ? (
                  <img alt={LogOutIcon} src={LogOutIcon} onClick={LogOutHandler} />
               ) : (
                  <div className={'headerBtns'}>
                     <button>Sign in</button>
                     <button>Registration</button>
                  </div>
               )}
            </SHeaderInner>
         </Container>
      </SHeader>
   )
}
