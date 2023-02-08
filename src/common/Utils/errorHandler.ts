import { useId } from 'react'

import { Dispatch } from 'redux'

import { SetAppNotificationAC, setAppStatusAC } from '../../bll/appReducer'
import { ResponseType } from '../../dal/authAPI'

export const HandleServerAppError = <D>(dispatch: ErrorUtilsDispatcType, data: ResponseType<D>) => {
   if (data.messages.length) {
      dispatch(
         SetAppNotificationAC({
            notifications: { type: 'error', message: data.messages[0] },
         })
      )
   } else {
      dispatch(
         SetAppNotificationAC({
            notifications: { type: 'error', message: 'Some Error occurred!!' },
         })
      )
   }

   dispatch(setAppStatusAC({ status: 'error' }))
}

export const HandleServerNetworkError = (
   dispatch: ErrorUtilsDispatcType,
   error: { message: string }
) => {
   dispatch(setAppStatusAC({ status: 'error' }))
   dispatch(SetAppNotificationAC({ notifications: { type: 'error', message: error.message } }))
}
type ErrorUtilsDispatcType = Dispatch<
   ReturnType<typeof setAppStatusAC> | ReturnType<typeof SetAppNotificationAC>
>
//TODO cheek why doent work when we run out of Network
