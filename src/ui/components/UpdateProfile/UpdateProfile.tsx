import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'
import facebookIcon from '../../../common/icons/social/facebook.png'
import githubIcon from '../../../common/icons/social/github.png'
import instagramIcon from '../../../common/icons/social/instagram.png'
import mainLinkIcon from '../../../common/icons/social/mainLink.png'
import twitterIcon from '../../../common/icons/social/twitter.png'
import vkIcon from '../../../common/icons/social/vk.png'
import websiteIcon from '../../../common/icons/social/website.png'
import youtubeIcon from '../../../common/icons/social/youtube.png'
import { ProfileDataType } from '../../../dal/profileAPI'
import { LookingForAJobSwitcher } from '../lookingForAJob/LookingForAJobSwitcher'

import { ContactInput } from './ContactInput'

const ContactsWrapper = styled.label`
   display: grid;

   grid-template-columns: 1fr 1fr;
   gap: 10px;
`
const UpdateProfileWrapper = styled.form``
const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`

export const UpdateProfile = () => {
   const lookingForAJob = useAppSelector(state => state.profile.data.lookingForAJob)

   const defaultValues = { lookingForAJob }
   const { register, handleSubmit } = useForm<ProfileDataType>({ defaultValues })

   const onSubmitHandler: SubmitHandler<ProfileDataType> = data =>
      alert(JSON.stringify(data, null, 2))

   return (
      <UpdateProfileWrapper onSubmit={handleSubmit(onSubmitHandler)}>
         <Wrapper>
            fullName:
            <ContactInput inputProps={{ ...register('fullName'), type: 'text' }} />
         </Wrapper>
         <Wrapper>
            Looking for a job:
            <LookingForAJobSwitcher {...register('lookingForAJob')} />
         </Wrapper>
         <h4>Contacts:</h4>
         <ContactsWrapper>
            <ContactInput inputProps={{ ...register('contacts.facebook') }} img={facebookIcon} />
            <ContactInput inputProps={{ ...register('contacts.github') }} img={githubIcon} />
            <ContactInput inputProps={{ ...register('contacts.instagram') }} img={instagramIcon} />
            <ContactInput inputProps={{ ...register('contacts.twitter') }} img={twitterIcon} />
            <ContactInput inputProps={{ ...register('contacts.vk') }} img={vkIcon} />
            <ContactInput inputProps={{ ...register('contacts.youtube') }} img={youtubeIcon} />
            <ContactInput inputProps={{ ...register('contacts.mainLink') }} img={mainLinkIcon} />
            <ContactInput inputProps={{ ...register('contacts.website') }} img={websiteIcon} />
         </ContactsWrapper>
         <button>submit</button>
      </UpdateProfileWrapper>
   )
}
