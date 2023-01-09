import React from 'react'

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
  return (
    <WrapperDiv>
      <BlockDiv>
        <Sidebar></Sidebar>
        <AvatarDiv>
          <img alt="user avatar" src={avatar} />
        </AvatarDiv>
        <AboutProfileDiv>
          <span>Profile name</span>
          <span>Status</span>
        </AboutProfileDiv>
      </BlockDiv>
      <PostDiv>
        <BlockWithAvatar>
          <img src={miniAvatar} alt="user mini-avatar" />
          <span>Profile name</span>
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
