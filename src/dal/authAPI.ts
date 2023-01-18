import { instance } from './instance'

export const authAPI = {
   login(data: LoginRequestDataType) {
      return instance.post<AuthResponseType<{ userId: number }>>('/auth/login', data)
   },
   logOut() {
      return instance.delete<AuthResponseType>('/auth/login')
   },
   me() {
      return instance.get<AuthResponseType<{ id: number; email: string; login: string }>>(
         '/auth/me'
      )
   },
}

export type LoginRequestDataType = {
   email: string
   password: string
   rememberMe?: boolean
   captcha?: string
}
export type AuthResponseType<D = {}> = {
   resultCode: number
   messages: []
   fieldsErrors: []
   data: D
}
