import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { SetAppErrorAC } from '../../../bll/appReducer'

import { CloseModalIcon, NotificationBarItem, NotificationBarWrapper, ProgressBar } from './styled'

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

   const handleClose = () => {
      dispatch(SetAppErrorAC({ error: '' }))
      setExit(true)
      // setWidth(100)
   }

   return (
      <NotificationBarWrapper exit={exit} error={!!error} success={true}>
         <NotificationBarItem
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}

            //className={`${error ? 'success' : 'error'} ${exit ? 'exit' : ''}`}
         >
            <p>{error}</p>
            <CloseModalIcon onClick={handleClose} />
            <ProgressBar style={{ width: `${width}%` }} />
         </NotificationBarItem>
      </NotificationBarWrapper>
   )
}
