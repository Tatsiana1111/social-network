import axios from 'axios'

import { instance } from './instance'
import { getUsersParamsType } from './usersAPI'

export const profileAPI = {
   getProfileData(userId: number) {
      return instance.get<ProfileDataType>(`/profile/${userId}`)
   },
   getStatus(userId: number) {
      return instance.get(`/profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put(`/profile/status`, { status })
   },
   getPosts(params: GetPostsParamsType) {
      return axios
         .create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            withCredentials: true,
         })
         .get(`/posts`, { params })
   },
   addPost(params: PostDataType) {
      return axios
         .create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            withCredentials: true,
         })
         .post(`/posts`, params)
   },
   updateProfile(profile: ProfileDataType) {
      return instance.put(`/profile`, profile)
   },
}

export type ProfileDataType = {
   aboutMe: string
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   userId: number
   contacts: ProfileDataTypeContacts
   photos: ProfileDataTypePhotos
}
export type PostDataType = {
   id?: number
   title: string
   body: string
   userId: number
}

export type GetPostsParamsType = {
   _page?: number
   _limit?: number
}
export type ProfileDataTypeContacts = {
   facebook?: string
   website?: string
   vk?: string
   twitter?: string
   instagram?: string
   youtube?: string
   github?: string
   mainLink?: string
}
export type ProfileDataTypePhotos = {
   small?: string
   large?: string
}