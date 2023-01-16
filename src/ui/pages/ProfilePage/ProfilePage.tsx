import React, { useEffect } from 'react'

import { ProfileDataType } from '../../../api/profileAPI'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getProfileData, getStatus, updateStatus } from '../../../bll/profileReducer'
import avatar from '../../../common/images/avatar.svg'
import miniAvatar from '../../../common/images/miniAvatar.svg'
import { Box } from '../../components/Box/Box'
import falseCheckbox from '../../../common/assets/icons/false.png'
import trueCheckbox from '../../../common/assets/icons/true.png'
import avatar from '../../../common/assets/images/avatar.svg'
import miniAvatar from '../../../common/assets/images/miniAvatar.svg'
import { EditableSpan } from '../../components/EditableSpan/EditableSpan'

import { PostWrapper, WrapperDiv } from './styled'

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
         <Box className={'profilePosts'}>
            <PostWrapper>
               <div className={'PostHeader'}>
                  <img
                     src={userSmallAvatar ? userSmallAvatar : miniAvatar}
                     alt="user mini-avatar"
                  />
                  <span>{profileName}</span>
               </div>
               <div className={'comment'}>
                  <img
                     src={userSmallAvatar ? userSmallAvatar : miniAvatar}
                     alt="user mini-avatar"
                  />
                  <textarea placeholder="Напишите свой комментарий" />
               </div>
            </PostWrapper>
         </Box>

         {/*<BlockDiv>*/}
         {/*   <AvatarDiv>*/}
         {/*      <img alt="user avatar" src={userLargeAvatar ? userLargeAvatar : avatar} />*/}
         {/*   </AvatarDiv>*/}
         {/*   <AboutProfileDiv>*/}
         {/*      <span id="profileName">{profileName}</span>*/}
         {/*      <EditableSpan text={userStatus} updateText={updateUserStatus} />*/}
         {/*      <span>{userAboutMeInfo}</span>*/}
         {/*   </AboutProfileDiv>*/}
         {/*</BlockDiv>*/}
         {/*<PostDiv>*/}
         {/*   <BlockWithAvatar>*/}
         {/*      <img*/}
         {/*         id="smallAvatar"*/}
         {/*         src={userSmallAvatar ? userSmallAvatar : miniAvatar}*/}
         {/*         alt="user mini-avatar"*/}
         {/*      />*/}
         {/*      <span>{profileName}</span>*/}
         {/*   </BlockWithAvatar>*/}
         {/*   <PostImage src={userLargeAvatar} alt="post photo" />*/}
         {/*   <BlockWithAvatar>*/}
         {/*      <img*/}
         {/*         id="smallAvatar"*/}
         {/*         src={userSmallAvatar ? userSmallAvatar : miniAvatar}*/}
         {/*         alt="user mini-avatar"*/}
         {/*      />*/}
         {/*      <textarea name="" id="" placeholder="Напишите свой комментарий"></textarea>*/}
         {/*   </BlockWithAvatar>*/}
         {/*</PostDiv>*/}
      </WrapperDiv>
   )
}
