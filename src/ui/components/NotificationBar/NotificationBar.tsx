import React from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { SetAppErrorAC } from '../../../bll/appReducer'

const NotificationBarWrapper = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   max-width: 300px;
   height: 100px;
   background-color: forestgreen;
   border-radius: 20px;
   margin: 0 0 10px 10px;
`
const CloseModal = styled.span`
   position: absolute;
   top: 10px;
   right: 10px;
   width: 24px;
   height: 24px;
   opacity: 0.5;
   cursor: pointer;
   transition: opacity ease 0.5s;

   &:hover {
      opacity: 1;
   }

   ::before,
   ::after {
      content: '';
      position: absolute;
      top: 10px;
      display: block;
      width: 24px;
      height: 3px;
      background: #000;
   }

   ::before {
      transform: rotate(45deg);
   }

   ::after {
      transform: rotate(-45deg);
   }
`

export const NotificationBar = () => {
   const error = useAppSelector(state => state.app.error)
   const dispatch = useAppDispatch()

   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
         return
      }
      dispatch(SetAppErrorAC({ error: 'd' }))
   }

   return (
      <NotificationBarWrapper>
         <div>
            <h2>{error}</h2>
            <CloseModal onClick={handleClose} />
         </div>
      </NotificationBarWrapper>
   )
}
