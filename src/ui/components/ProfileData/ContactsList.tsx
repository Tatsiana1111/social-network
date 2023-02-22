import React from 'react'

import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'
import facebookIcon from '../../../common/icons/social/facebook.png'
import githubIcon from '../../../common/icons/social/github.png'
import instaIcon from '../../../common/icons/social/instagram.png'
import mainLinkIcon from '../../../common/icons/social/mainLink.png'
import twitterIcon from '../../../common/icons/social/twitter.png'
import vkIcon from '../../../common/icons/social/vk.png'
import websiteIcon from '../../../common/icons/social/website.png'
import youtubeIcon from '../../../common/icons/social/youtube.png'

import { Contact } from './Contact'
const ContactsListWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   gap: 15px;
   margin: 5px 0;
`

export const ContactsList = () => {
   const contacts = useAppSelector(state => state.profile.data.contacts)

   return (
      <ContactsListWrapper>
         {contacts && contacts.facebook && <Contact to={contacts.facebook} img={facebookIcon} />}
         {contacts && contacts.github && <Contact to={contacts.github} img={githubIcon} />}
         {contacts && contacts.instagram && <Contact to={contacts.instagram} img={instaIcon} />}
         {contacts && contacts.mainLink && <Contact to={contacts.mainLink} img={mainLinkIcon} />}
         {contacts && contacts.twitter && <Contact to={contacts.twitter} img={twitterIcon} />}
         {contacts && contacts.vk && <Contact to={contacts.vk} img={vkIcon} />}
         {contacts && contacts.website && <Contact to={contacts.website} img={websiteIcon} />}
         {contacts && contacts.youtube && <Contact to={contacts.youtube} img={youtubeIcon} />}
      </ContactsListWrapper>
   )
}
