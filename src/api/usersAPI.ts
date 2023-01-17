import { instance } from './instance'

export const userAPI = {
   getUsers(params: getUsersParamsType) {
      return instance.get<UsersResponseDataType>('/users', { params })
   },
}

export type getUsersParamsType = {
   count?: number //page size (how many items will be returned in response)
   page?: number //number of portion of items
   term?: string //user name string for searching
   friend?: boolean //if true, then find only followed users, false - only not followed users, if omit parameter - all users
}

export interface UsersResponseDataType {
   items: UserItemsType[]
   totalCount: number
   error: null
}
export interface UsertemsPhotos {
   small?: any
   large?: any
}
export interface UserItemsType {
   photos: UsertemsPhotos
   name: string
   id: number
   uniqueUrlName: any
   status: any
   followed: boolean
}
