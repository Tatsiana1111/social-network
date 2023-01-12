import { instance } from './instance'

export const profileAPI = {
   getProfileData(userId: number) {
      return instance.get<ProfileDataType>(`/profile/${userId}`)
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
