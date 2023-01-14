import React, { ChangeEvent, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getProfileData, getStatus, updateStatus } from '../../../bll/profileReducer'
import avatar from '../../../common/assets/images/avatar.svg'
import miniAvatar from '../../../common/assets/images/miniAvatar.svg'
import { EditableSpan } from '../../components/EditableSpan/EditableSpan'
import { Sidebar } from '../../components/Sidebar/Sidebar'

import {
   AboutProfileDiv,
   AvatarDiv,
   BlockDiv,
   BlockWithAvatar,
   PostDiv,
   PostImage,
   WrapperDiv,
} from './styled'

export const ProfilePage = () => {
   const profileID = useAppSelector(state => state.app.profileID)
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userLargeAvatar = useAppSelector(state => state.profile.data.photos?.large)
   const userSmallAvatar = useAppSelector(state => state.profile.data.photos?.small)
   const userStatus = useAppSelector(state => state.profile.status)
   const userAboutMeInfo = useAppSelector(state => state.profile.data.aboutMe)
   // const { profileID } = useParams()
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getProfileData(profileID))
      dispatch(getStatus(profileID))
   }, [])
   const updateUserStatus = (status: string) => {
      dispatch(updateStatus(status))
   }

   return (
      <WrapperDiv>
         <BlockDiv>
            <Sidebar />
            <AvatarDiv>
               <img alt="user avatar" src={userLargeAvatar ? userLargeAvatar : avatar} />
            </AvatarDiv>
            <AboutProfileDiv>
               <span id="profileName">{profileName}</span>
               <EditableSpan text={userStatus} updateText={updateUserStatus} />
               <span>{userAboutMeInfo}</span>
            </AboutProfileDiv>
         </BlockDiv>
         <PostDiv>
            <BlockWithAvatar>
               <img
                  id="smallAvatar"
                  src={userSmallAvatar ? userSmallAvatar : miniAvatar}
                  alt="user mini-avatar"
               />
               <span>{profileName}</span>
            </BlockWithAvatar>
            <PostImage src={userLargeAvatar} alt="post photo" />
            <BlockWithAvatar>
               <img
                  id="smallAvatar"
                  src={userSmallAvatar ? userSmallAvatar : miniAvatar}
                  alt="user mini-avatar"
               />
               <textarea name="" id="" placeholder="Напишите свой комментарий"></textarea>
            </BlockWithAvatar>
         </PostDiv>
      </WrapperDiv>
   )
}
