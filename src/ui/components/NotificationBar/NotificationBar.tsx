import React from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'

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

   const dispatch = useAppDispatch()

   return (
      <NotificationBarWrapper>
         {/*{error && (*/}
         {/*   <NotificationBarWrapper exit={exit} error={!!error}>*/}
         {/*      <NotificationBarItem onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>*/}
         {/*         <p>{error}</p>*/}
         {/*         <CloseModalIcon onClick={handleClose} />*/}
         {/*         <ProgressBar error={!!error} style={{ width: `${width}%` }} />*/}
         {/*         <AlertIcon src={alert} alt={'alertIcon'} />*/}
         {/*         /!*<AlertIcon src={success} alt={'alertIcon'} />*!/*/}
         {/*      </NotificationBarItem>*/}
         {/*   </NotificationBarWrapper>*/}
         {/*)}*/}
         {/*{success && (*/}
         {/*   <NotificationBarWrapper exit={exit} success={true}>*/}
         {/*      <NotificationBarItem onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer}>*/}
         {/*         <p>{success}</p>*/}
         {/*         <CloseModalIcon onClick={handleClose} />*/}
         {/*         <ProgressBar success={true} style={{ width: `${width}%` }} />*/}
         {/*         /!*<AlertIcon src={alert} alt={'alertIcon'} />*!/*/}
         {/*         <AlertIcon src={successIcon} alt={'successIcon'} />*/}
         {/*      </NotificationBarItem>*/}
         {/*   </NotificationBarWrapper>*/}
         {/*)}*/}
         {notifications.map((alert, index) => {
            return <Alert key={index} message={alert.message} type={alert.type} />
         })}
      </NotificationBarWrapper>
   )
}
// https://github.com/daryanka/notification-component
// https://www.youtube.com/watch?v=KYKmqeU6lOI&list=PLw1B0qAczd1MpTJmhSQV4oNrYe-7OW8MK&index=1&t=1681s
