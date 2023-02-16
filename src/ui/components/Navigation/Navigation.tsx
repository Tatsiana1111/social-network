import React from 'react'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'
import users from '../../../common/icons/friends.png'
import message from '../../../common/icons/gallery.png'
import profile from '../../../common/icons/user.png'
import { PATH } from '../../pages/Pages'

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
   color: ${props => props.theme.colors.primary};
   text-decoration: none;

   :active {
      color: #526884;
   }
`

export const Navigation = () => {
   const myProfileID = useAppSelector(state => state.app.profileID)

   return (
      <nav>
         <NavLinkStyled to={`${PATH.profile}/${myProfileID}`}>
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
      </nav>
   )
}
