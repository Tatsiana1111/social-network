import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getProfileData, getStatus, updateStatus } from '../../../bll/profileReducer'
import avatar from '../../../common/images/avatar.svg'
import { Box } from '../../components/Box/Box'
import { EditableSpan } from '../../components/EditableSpan/EditableSpan'
import { Post } from '../../components/Post/Post'

import { WrapperDiv } from './styled'

export const ProfilePage = () => {
   const profileID = useAppSelector(state => state.app.profileID)
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)
   const userSmallAvatar = useAppSelector(state => state.profile.data.photos?.small)
   const userStatus = useAppSelector(state => state.profile.status)
   const userAboutMeInfo = useAppSelector(state => state.profile.data.aboutMe)
   const contacts = useAppSelector(state => state.profile.data.contacts)
   const lookingForAJob = useAppSelector(state => state.profile.data.lookingForAJob)
   // const { profileID } = useParams()
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getProfileData(profileID))
      dispatch(getStatus(profileID))
   }, [])

   const updateUserStatus = (status: string) => {
      dispatch(updateStatus(status))
   }
   // const updateProfileHandler = (profile: ProfileDataType) => {
   //    dispatch(updateProfile(profile))
   // }

   return (
      <WrapperDiv>
         <Box className={'profilePhoto'}>
            <img alt="user avatar" src={userLargeAvatar ? userLargeAvatar : avatar} />
         </Box>

         <Box className={'profileData'}>
            <span>{profileName}</span>
            <EditableSpan text={userStatus} updateText={updateUserStatus} />
            <span>{userAboutMeInfo}</span>
         </Box>
         <div className={'profilePosts'}>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
         </div>
      </WrapperDiv>
   )
}
