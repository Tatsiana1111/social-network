import React from 'react'

import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'

import { Alert } from './Alert/Alert'
const NotificationBarWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 300px;
   gap: 10px;
   position: fixed;
   bottom: 10px;
   left: 10px;
`

export const NotificationBar = () => {
   const notifications = useAppSelector(state => state.app.notifications)

   return (
      <NotificationBarWrapper>
         {notifications.map(alert => {
            return <Alert key={alert.id} id={alert.id} message={alert.message} type={alert.type} />
         })}
      </NotificationBarWrapper>
   )
}
// https://github.com/daryanka/notification-component
// https://www.youtube.com/watch?v=KYKmqeU6lOI&list=PLw1B0qAczd1MpTJmhSQV4oNrYe-7OW8MK&index=1&t=1681s
