import { instance } from './instance'

export const userAPI = {
   getUsers(params: getUsersParamsType) {
      return instance.get<UsersResponseDataType>('/users', { params })
   },
   followUser(userId: number) {
      return instance.post(`/follow/${userId}`, {})
   },
   unFollowUser(userId: number) {
      return instance.delete(`/follow/${userId}`)
   },
}

export type getUsersParamsType = {
   count?: string //page size (how many items will be returned in response)
   page?: string //number of portion of items
   term?: string //user name string for searching
   friend?: string //if true, then find only followed users, false - only not followed users, if omit parameter - all users
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
