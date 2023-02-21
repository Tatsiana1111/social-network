import React from 'react'

import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import facebookIcon from '../../../common/icons/social/facebook.png'
import githubIcon from '../../../common/icons/social/github.png'
import instagramIcon from '../../../common/icons/social/instagram.png'
import mainLinkIcon from '../../../common/icons/social/mainLink.png'
import twitterIcon from '../../../common/icons/social/twitter.png'
import vkIcon from '../../../common/icons/social/vk.png'
import websiteIcon from '../../../common/icons/social/website.png'
import youtubeIcon from '../../../common/icons/social/youtube.png'

import { ContactInput } from './ContactInput'

const ContactsWrapper = styled.div`
   display: grid;

   grid-template-columns: 1fr 1fr;
   gap: 10px;
`
const UpdateProfileWrapper = styled.form``

type FormData = {
   facebook?: string
   github?: string
   instagram?: string
   twitter?: string
   vk?: string
   youtube?: string
   mainLink?: string
   website?: string
}
export const UpdateProfile = () => {
   const {
      register,
      setValue,

      handleSubmit,
      formState: { errors },
   } = useForm<FormData>()

   const onSubmit = handleSubmit(data => alert(data))

   return (
      <UpdateProfileWrapper onSubmit={onSubmit}>
         Contacts:
         <ContactsWrapper>
            <ContactInput inputProps={{ ...register('facebook') }} img={facebookIcon} />
            <ContactInput inputProps={{ ...register('github') }} img={githubIcon} />
            <ContactInput inputProps={{ ...register('instagram') }} img={instagramIcon} />
            <ContactInput inputProps={{ ...register('twitter') }} img={twitterIcon} />
            <ContactInput inputProps={{ ...register('vk') }} img={vkIcon} />
            <ContactInput inputProps={{ ...register('youtube') }} img={youtubeIcon} />
            <ContactInput inputProps={{ ...register('mainLink') }} img={mainLinkIcon} />
            <ContactInput inputProps={{ ...register('website') }} img={websiteIcon} />
         </ContactsWrapper>
         <button>submit</button>
      </UpdateProfileWrapper>
   )
}
