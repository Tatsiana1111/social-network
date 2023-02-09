import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '../../../../app/hooks'
import { NotificationType, RemoveAppNotificationAC } from '../../../../bll/appReducer'
import errorIcon from '../../../../common/icons/errorIcon.png'
import successIcon from '../../../../common/icons/success.png'
import { AlertIcon, AlertItem, AlertWrapper, CloseAlertIcon, ProgressBar } from '../styled'

type AlertType = NotificationType & {}

export const Alert = (props: AlertType) => {
   const dispatch = useAppDispatch()
   const [exit, setExit] = useState(false)
   const [width, setWidth] = useState(0)
   const [intervalID, setIntervalID] = useState<any>(null)

   const handleStartTimer = () => {
      if (props.type) {
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
         dispatch(RemoveAppNotificationAC({ id: props.id }))
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
      dispatch(RemoveAppNotificationAC({ id: props.id }))
      setExit(true)
   }
   const name = props.message.split(' ')[0]
   const restMessage = props.message.split(' ').slice(1).join(' ')

   return (
      <AlertWrapper exit={exit} type={props.type}>
         <AlertItem onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>
            <p>
               <span>{name}</span>
               <br />
               {restMessage}
            </p>
            <CloseAlertIcon onClick={handleClose} />
            <ProgressBar type={props.type} style={{ width: `${width}%` }} />
            {props.type === 'error' && <AlertIcon src={errorIcon} alt={'errorIcon'} />}
            {props.type === 'success' && <AlertIcon src={successIcon} alt={'successIcon'} />}
         </AlertItem>
      </AlertWrapper>
   )
}
