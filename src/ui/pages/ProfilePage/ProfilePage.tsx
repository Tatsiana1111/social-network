import React from 'react'

import community from '../../../common/assets/icons/community.svg'
import message from '../../../common/assets/icons/message.svg'
import music from '../../../common/assets/icons/music.svg'
import profile from '../../../common/assets/icons/profile.svg'
import users from '../../../common/assets/icons/users.svg'
import avatar from '../../../common/assets/images/avatar.svg'
import miniAvatar from '../../../common/assets/images/miniAvatar.svg'
import postPhoto from '../../../common/assets/images/postPhoto.svg'

import { AboutProfileDiv, AvatarDiv, MenuDiv, PostDiv } from './styled'

export const ProfilePage = () => {
  const onClickProfileHandler = () => {
    console.log('hi')
  }

  return (
    <div>
      <div>
        <MenuDiv onClick={onClickProfileHandler}>
          <img alt="profile icon" src={profile} /> Профиль
        </MenuDiv>
        <MenuDiv>
          <img alt="profile icon" src={message} />
          Сообщения
        </MenuDiv>
        <MenuDiv>
          <img alt="profile icon" src={users} />
          Найти друзей
        </MenuDiv>
        <MenuDiv>
          <img alt="profile icon" src={music} />
          Музыка
        </MenuDiv>
        <MenuDiv>
          <img alt="profile icon" src={community} />
          Сообщества
        </MenuDiv>
      </div>
      <AvatarDiv>
        <img alt="user avatar" src={avatar} />
      </AvatarDiv>
      <AboutProfileDiv>
        <span>Profile name</span>
        <span>Status</span>
      </AboutProfileDiv>
      <PostDiv>
        <div>
          <img src={miniAvatar} alt="user mini-avatar" />
          <span>Profile name</span>
        </div>
        <img src={postPhoto} alt="post photo" />
        <div>
          <img src={miniAvatar} alt="user mini-avatar" />
          <textarea name="" id="" placeholder="Напишите свой комментарий"></textarea>
        </div>
      </PostDiv>
    </div>
  )
}
