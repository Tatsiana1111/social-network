import React from 'react'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import community from '../../../common/assets/icons/community.svg'
import message from '../../../common/assets/icons/message.svg'
import music from '../../../common/assets/icons/music.svg'
import profile from '../../../common/assets/icons/profile.svg'
import users from '../../../common/assets/icons/users.svg'
import { PATH } from '../../pages/Pages'

export const NavLinkStyled = styled(NavLink)`
   img {
      margin-right: 10px;
   }

   cursor: pointer;
   margin: 10px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   font-weight: bold;
   font-family: 'Roboto Light', sans-serif;
   font-size: 20px;
   color: #1f3c60;
   text-decoration: none;
   :active {
      color: #526884;
   }
`

export const Sidebar = () => {
   return (
      <aside>
         <nav>
            <NavLinkStyled to={PATH.profile}>
               <img alt="profile icon" src={profile} />
               My Profile
            </NavLinkStyled>
            <NavLinkStyled to={PATH.users}>
               <img alt="users icon" src={users} />
               Find Friends
            </NavLinkStyled>
            {/*<NavLink>*/}
            {/*   <img alt="profile icon" src={message} />*/}
            {/*   Сообщения*/}
            {/*</NavLink>*/}
            {/*<NavLink>*/}
            {/*   <img alt="profile icon" src={music} />*/}
            {/*   Музыка*/}
            {/*</NavLink>*/}
            {/*<NavLink>*/}
            {/*   <img alt="profile icon" src={community} />*/}
            {/*   Сообщества*/}
            {/*</NavLink>*/}
         </nav>
      </aside>
   )
}
