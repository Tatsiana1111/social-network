import React from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setIsBurgerOpenAC } from '../../../bll/appReducer'
import { Navigation } from '../Navigation/Navigation'

import { Burger } from './Burger'

type T = {
   open: boolean
}
const BurgerMenuWrapper = styled.div<T>`
   display: ${props => (props.open ? 'block' : 'none')};
   position: fixed;
   top: 0;
   left: 0;
   z-index: 5;
`
const BurgerMenuContent = styled.aside<T>`
   display: none;
   position: absolute;
   top: 0;
   left: 0;
   height: 100vh;
   width: 300px;
   background-color: darkcyan;
   z-index: 6;
   padding: 10px;
   @media (max-width: ${props => props.theme.media.large}px) {
      display: ${props => (props.open ? 'flex' : 'none')};
      justify-content: space-between;
   }
`

const BurgerBackGround = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   z-index: 5;
   height: 100vh;
   width: 100vw;
   background-color: royalblue;
   opacity: 0.6;
   cursor: pointer;
   filter: blur(186px);
`

export const BurgerMenu = () => {
   const dispatch = useAppDispatch()
   const isBurgerOpen = useAppSelector(state => state.app.isBurgerOpen)

   const modalClickHandler = (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation()
   }
   const handleClose = () => {
      dispatch(setIsBurgerOpenAC({ value: !isBurgerOpen }))
   }

   return (
      <BurgerMenuWrapper open={isBurgerOpen}>
         <BurgerBackGround onClick={handleClose} />
         <BurgerMenuContent open={isBurgerOpen} onClick={modalClickHandler}>
            <Navigation />
            <Burger />
         </BurgerMenuContent>
      </BurgerMenuWrapper>
   )
}
