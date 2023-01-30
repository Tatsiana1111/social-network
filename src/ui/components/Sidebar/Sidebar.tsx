import React from 'react'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import community from '../../../common/icons/community.svg'
import message from '../../../common/icons/music.svg'
import music from '../../../common/icons/music.svg'
import profile from '../../../common/icons/profile.svg'
import users from '../../../common/icons/users.svg'
import { PATH } from '../../pages/Pages'

export const SidebarWrapper = styled.aside`
   position: sticky;
   top: 15px;
   max-width: 100%;
   min-width: fit-content;
   height: 100%;
`
export const NavLinkStyled = styled(NavLink)`
   img {
      margin-right: 10px;
      height: 30px;
      width: 30px;
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
      <SidebarWrapper>
         <nav>
            <NavLinkStyled to={PATH.profile}>
               <img alt="profile icon" src={profile} />
               My Profile
            </NavLinkStyled>
            <NavLinkStyled to={PATH.users}>
               <img alt="users icon" src={users} />
               Find Friends
            </NavLinkStyled>
            <NavLinkStyled to={PATH.albums}>
               <img alt="albums icon" src={message} />
               Albums
            </NavLinkStyled>
            {/*<NavLink>*/}
            {/*   <img alt="profile icon" src={music} />*/}
            {/*   Музыка*/}
            {/*</NavLink>*/}
            {/*<NavLink>*/}
            {/*   <img alt="profile icon" src={community} />*/}
            {/*   Сообщества*/}
            {/*</NavLink>*/}
         </nav>
      </SidebarWrapper>
   )
}
