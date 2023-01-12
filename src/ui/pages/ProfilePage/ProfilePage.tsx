import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getProfileData } from '../../../bll/profileReducer'
import avatar from '../../../common/assets/images/avatar.svg'
import miniAvatar from '../../../common/assets/images/miniAvatar.svg'
import postPhoto from '../../../common/assets/images/postPhoto.svg'
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
   const name = useAppSelector(state => state.profile.data.fullName)
   // const { profileID } = useParams()
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getProfileData(profileID))
   }, [])

   return (
      <WrapperDiv>
         <BlockDiv>
            <Sidebar />
            <AvatarDiv>
               <img alt="user avatar" src={avatar} />
            </AvatarDiv>
            <AboutProfileDiv>
               <span>{name}</span>
               <span>Status</span>
            </AboutProfileDiv>
         </BlockDiv>
         <PostDiv>
            <BlockWithAvatar>
               <img src={miniAvatar} alt="user mini-avatar" />
               <span>{name}</span>
            </BlockWithAvatar>
            <PostImage src={postPhoto} alt="post photo" />
            <BlockWithAvatar>
               <img src={miniAvatar} alt="user mini-avatar" />
               <textarea name="" id="" placeholder="Напишите свой комментарий"></textarea>
            </BlockWithAvatar>
         </PostDiv>
      </WrapperDiv>
   )
}
