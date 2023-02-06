import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import './de.css'
import { SetAppErrorAC } from '../../../bll/appReducer'

import { CloseModalIcon } from './styled'

const NotificationBarWrapper = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   max-width: 300px;
   height: 50px;
   background-color: red;
   color: burlywood;
   border-radius: 20px;
   margin: 0 0 10px 10px;
   border: 2px solid #17bd0d;

   div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
   }
`

export const NotificationBar = () => {
   const error = useAppSelector(state => state.app.error)
   const dispatch = useAppDispatch()

   //   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
   //    if (reason === 'clickaway') {
   //         return
   //      }
   //      dispatch(SetAppErrorAC({ error: '' }))
   //   }
   //   const handleOpen = (): boolean => {
   //      return !!error
   //   }
   const [exit, setExit] = useState(false)
   const [width, setWidth] = useState(0)
   const [intervalID, setIntervalID] = useState<any>(null)

   const handleStartTimer = () => {
      const id = setInterval(() => {
         setWidth(prev => {
            if (prev < 100) {
               return prev + 0.5
            }

            clearInterval(id)

            return prev
         })
      }, 20)

      setIntervalID(id)
   }

   const handlePauseTimer = () => {
      clearInterval(intervalID)
   }

   const handleCloseNotification = () => {
      handlePauseTimer()
      setExit(true)
      setTimeout(() => {
         dispatch(SetAppErrorAC({ error: '' }))
      }, 400)
   }

   useEffect(() => {
      if (width === 100) {
         // Close notification
         handleCloseNotification()
      }
   }, [width])

   useEffect(() => {
      handleStartTimer()
   }, [])

   return (
      <NotificationBarWrapper
         onMouseEnter={handlePauseTimer}
         onMouseLeave={handleStartTimer}
         className={`notification-item ${error ? 'success' : 'error'} ${exit ? 'exit' : ''}`}
      >
         <div>
            <h2>{error}</h2>
            <CloseModalIcon />
            <div className={'bar'} style={{ width: `${width}%` }} />
         </div>
      </NotificationBarWrapper>
   )
}
