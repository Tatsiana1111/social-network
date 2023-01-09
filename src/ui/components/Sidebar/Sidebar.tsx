import React from 'react'

import community from '../../../common/assets/icons/community.svg'
import message from '../../../common/assets/icons/message.svg'
import music from '../../../common/assets/icons/music.svg'
import profile from '../../../common/assets/icons/profile.svg'
import users from '../../../common/assets/icons/users.svg'

import { MenuDiv } from './styled'

export const Sidebar = () => {
  const onClickProfileHandler = () => {
    console.log('hi')
  }

  return (
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
  )
}
