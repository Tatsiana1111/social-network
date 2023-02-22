import React from 'react'

import styled from 'styled-components'

import facebookIcon from '../../../common/icons/social/facebook.png'
import githubIcon from '../../../common/icons/social/github.png'
import instagramIcon from '../../../common/icons/social/instagram.png'
import mainLinkIcon from '../../../common/icons/social/mainLink.png'
import twitterIcon from '../../../common/icons/social/twitter.png'
import vkIcon from '../../../common/icons/social/vk.png'
import websiteIcon from '../../../common/icons/social/website.png'
import youtubeIcon from '../../../common/icons/social/youtube.png'

import { Contact } from './Contact'
const ContactsListWrapper = styled.div`
   text-align: center;
   span {
      font-weight: bold;
      font-size: 24px;
   }
   div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
      margin: 5px 0;
   }
`

export const ContactsList = () => {
   // const facebook = useAppSelector(state => state.profile.data.contacts.facebook)
   const facebook = 'https://www.programcreek.com/typescript/?api=react-router-dom.NavLink'

   return (
      <ContactsListWrapper>
         <span>Contacts:</span>
         <div>
            <Contact to={facebook} img={facebookIcon} />
            <Contact to={facebook} img={githubIcon} />
            <Contact to={facebook} img={instagramIcon} />
            <Contact to={facebook} img={mainLinkIcon} />
            <Contact to={facebook} img={twitterIcon} />
            <Contact to={facebook} img={vkIcon} />
            <Contact to={facebook} img={websiteIcon} />
            <Contact to={facebook} img={youtubeIcon} />
         </div>
      </ContactsListWrapper>
   )
}
