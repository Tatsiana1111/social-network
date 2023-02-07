import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { SetAppErrorAC, SetAppSuccessAC } from '../../../bll/appReducer'
import alert from '../../../common/icons/alert.png'
import successIcon from '../../../common/icons/success.png'

import {
   AlertIcon,
   CloseModalIcon,
   NotificationBarItem,
   NotificationBarWrapper,
   ProgressBar,
} from './styled'

export const NotificationBar = () => {
   const error = useAppSelector(state => state.app.error)
   const success = useAppSelector(state => state.app.success)
   const dispatch = useAppDispatch()

   const [exit, setExit] = useState(false)
   const [width, setWidth] = useState(0)
   const [intervalID, setIntervalID] = useState<any>(null)

   const handleStartTimer = () => {
      if (error || success) {
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
         dispatch(SetAppSuccessAC({ message: '' }))
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
      dispatch(SetAppSuccessAC({ message: '' }))
      setExit(true)
   }

   return (
      <div>
         {error && (
            <NotificationBarWrapper exit={exit} error={!!error}>
               <NotificationBarItem onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>
                  <p>{error}</p>
                  <CloseModalIcon onClick={handleClose} />
                  <ProgressBar error={!!error} style={{ width: `${width}%` }} />
                  <AlertIcon src={alert} alt={'alertIcon'} />
                  {/*<AlertIcon src={success} alt={'alertIcon'} />*/}
               </NotificationBarItem>
            </NotificationBarWrapper>
         )}
         {success && (
            <NotificationBarWrapper exit={exit} success={true}>
               <NotificationBarItem onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>
                  <p>{success}</p>
                  <CloseModalIcon onClick={handleClose} />
                  <ProgressBar success={true} style={{ width: `${width}%` }} />
                  {/*<AlertIcon src={alert} alt={'alertIcon'} />*/}
                  <AlertIcon src={successIcon} alt={'successIcon'} />
               </NotificationBarItem>
            </NotificationBarWrapper>
         )}
      </div>
   )
}
// https://github.com/daryanka/notification-component
// https://www.youtube.com/watch?v=KYKmqeU6lOI&list=PLw1B0qAczd1MpTJmhSQV4oNrYe-7OW8MK&index=1&t=1681s
