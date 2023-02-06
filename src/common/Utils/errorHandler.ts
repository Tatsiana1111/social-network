import { Dispatch } from 'redux'

import { SetAppErrorAC, setAppStatusAC } from '../../bll/appReducer'
import { ResponseType } from '../../dal/authAPI'

export const HandleServerAppError = <D>(dispatch: ErrorUtilsDispatcType, data: ResponseType<D>) => {
   if (data.messages.length) {
      dispatch(SetAppErrorAC({ message: data.messages[0] }))
   } else {
      dispatch(SetAppErrorAC({ message: 'Some Error occurred!!' }))
   }

   dispatch(setAppStatusAC({ status: 'error' }))
}

export const HandleServerNetworkError = (
   dispatch: ErrorUtilsDispatcType,
   error: { message: string }
) => {
   dispatch(setAppStatusAC({ status: 'error' }))
   dispatch(SetAppErrorAC({ message: error.message }))
}
type ErrorUtilsDispatcType = Dispatch<
   ReturnType<typeof setAppStatusAC> | ReturnType<typeof SetAppErrorAC>
>
