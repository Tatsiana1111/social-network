import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { SetAppErrorAC } from '../../../bll/appReducer'
import alert from '../../../common/icons/alert.png'
import success from '../../../common/icons/success.png'

import {
   AlertIcon,
   CloseModalIcon,
   NotificationBarItem,
   NotificationBarWrapper,
   ProgressBar,
} from './styled'

export const NotificationBar = () => {
   const error = useAppSelector(state => state.app.error)
   const dispatch = useAppDispatch()

   const [exit, setExit] = useState(false)
   const [width, setWidth] = useState(0)
   const [intervalID, setIntervalID] = useState<any>(null)

   const handleStartTimer = () => {
      if (error) {
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
   }

   const handlePauseTimer = () => {
      clearInterval(intervalID)
   }

   const handleCloseNotification = () => {
      handlePauseTimer()
      setExit(true)
      setTimeout(() => {
         dispatch(SetAppErrorAC({ message: '' }))
      }, 400)
   }

   useEffect(() => {
      if (width === 100) {
         handleCloseNotification()
      }
   }, [width])

   useEffect(() => {
      handleStartTimer()
   }, [])

   const handleClose = () => {
      dispatch(SetAppErrorAC({ message: '' }))
      setExit(true)
      // setWidth(100)
   }

   return (
      <NotificationBarWrapper exit={exit} error={!!error} success={true}>
         <NotificationBarItem onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>
            <p>{error}</p>
            <CloseModalIcon onClick={handleClose} />
            <ProgressBar style={{ width: `${width}%` }} />
            <AlertIcon src={alert} alt={'alertIcon'} />
            {/*<AlertIcon src={success} alt={'alertIcon'} />*/}
         </NotificationBarItem>
      </NotificationBarWrapper>
   )
}
