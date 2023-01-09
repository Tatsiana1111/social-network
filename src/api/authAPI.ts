import { instance } from './instance'

export const authAPI = {
  login(data: LoginResponseType) {
    return instance.post('/auth/login', data)
  },
  me() {
    instance.get('/auth/me')
  },
}

export type LoginResponseType = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}
export type RequestType = {
  resultCode: number
  messages: []
  data: {
    userId: number
  }
}
