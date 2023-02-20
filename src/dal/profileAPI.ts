import axios, { AxiosResponse } from 'axios'

import { PhotosType } from './albumsAPI'
import { instance, placeholder } from './instance'
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
   updateProfile(data: UpdateProfileFormType) {
      return instance.put(`/profile`, data)
   },
   getPosts(params: PlaceholderParamsType) {
      return placeholder.get(`/posts`, { params })
   },
   addPost(params: PostDataType) {
      return placeholder.post(`/posts`, params)
   },
   getComments(postId: number) {
      return placeholder.get(`/posts/${postId}/comments`)
   },
   addComment(params: CommentsDataType) {
      return placeholder.post(`/posts/${params.postId}/comments`, params)
   },
   updatePhoto(photos: string | Blob) {
      const formData = new FormData()

      formData.append('Image', photos)

      return instance.put(`/profile/photo`, formData, {
         headers: { 'Content-Type': 'multipart/form-data' },
      })
   },
}

export type UpdateProfileFormType = {
   fullName: string
   aboutMe: string
   lookingForAJobDescription: string
   lookingForAJob: boolean
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
   id: number
   title: string
   body: string
   userId: number
}
export type CommentsDataType = {
   postId?: number
   id?: number
   name?: string
   email?: string
   body?: string
}

export type PlaceholderParamsType = {
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
