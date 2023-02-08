import { useId } from 'react'

import { Dispatch } from 'redux'

import { SetAppNotificationAC, setAppStatusAC } from '../../bll/appReducer'
import { ResponseType } from '../../dal/authAPI'

import { GenerateId } from './generateID'

export const HandleServerAppError = <D>(dispatch: ErrorUtilsDispatcType, data: ResponseType<D>) => {
   const id = GenerateId()

   if (data.messages.length) {
      dispatch(
         SetAppNotificationAC({
            notifications: { type: 'error', message: data.messages[0], id },
         })
      )
   } else {
      dispatch(
         SetAppNotificationAC({
            notifications: { type: 'error', message: 'Some Error occurred!!', id },
         })
      )
   }

   dispatch(setAppStatusAC({ status: 'error' }))
}

export const HandleServerNetworkError = (
   dispatch: ErrorUtilsDispatcType,
   error: { message: string }
) => {
   const id = GenerateId()

   dispatch(setAppStatusAC({ status: 'error' }))
   dispatch(SetAppNotificationAC({ notifications: { type: 'error', message: error.message, id } }))
}
type ErrorUtilsDispatcType = Dispatch<
   ReturnType<typeof setAppStatusAC> | ReturnType<typeof SetAppNotificationAC>
>
