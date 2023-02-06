import { instance } from './instance'

export const authAPI = {
   login(data: LoginRequestDataType) {
      return instance.post<ResponseType<{ userId: number }>>('/auth/login', data)
   },
   logOut() {
      return instance.delete<ResponseType>('/auth/login')
   },
   me() {
      return instance.get<ResponseType<{ id: number; email: string; login: string }>>('/auth/me')
   },
}

export type LoginRequestDataType = {
   email: string
   password: string
   rememberMe?: boolean
   captcha?: string
}
export type ResponseType<D = {}> = {
   resultCode: number
   messages: string[]
   fieldsErrors: []
   data: D
}
