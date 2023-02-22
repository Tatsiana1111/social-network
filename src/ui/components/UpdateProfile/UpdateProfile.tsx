import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { updateProfile } from '../../../bll/profileReducer'
import facebookIcon from '../../../common/icons/social/facebook.png'
import githubIcon from '../../../common/icons/social/github.png'
import instagramIcon from '../../../common/icons/social/instagram.png'
import mainLinkIcon from '../../../common/icons/social/mainLink.png'
import twitterIcon from '../../../common/icons/social/twitter.png'
import vkIcon from '../../../common/icons/social/vk.png'
import websiteIcon from '../../../common/icons/social/website.png'
import youtubeIcon from '../../../common/icons/social/youtube.png'
import { ProfileDataType } from '../../../dal/profileAPI'
import { SButtonGreen } from '../Button/SButton'
import { LookingForAJobSwitcher } from '../lookingForAJob/LookingForAJobSwitcher'
import { ModalPropsType } from '../Modal/AddNewPostModal/AddNewPostModal'
import { Modal } from '../Modal/BaseModal/Modal'

import { ContactInput } from './ContactInput'

const ContactsWrapper = styled.label`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 10px;
   margin-bottom: 10px;
`
const UpdateProfileWrapper = styled.form`
   text-align: center;
`
const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   margin-bottom: 10px;
`

export const UpdateProfile = (props: ModalPropsType) => {
   const dispatch = useAppDispatch()
   const data = useAppSelector(state => state.profile.data)

   const { register, handleSubmit, reset } = useForm<ProfileDataType>({ defaultValues: data })

   const onSubmitHandler: SubmitHandler<ProfileDataType> = data => {
      dispatch(updateProfile(data))
      reset()
      props.handleModalClose()
   }

   return (
      <Modal
         title={'Change Profile Data'}
         isOpen={props.isModalOpen}
         closeModal={props.handleModalClose}
      >
         <UpdateProfileWrapper onSubmit={handleSubmit(onSubmitHandler)}>
            <Wrapper>
               FullName:
               <ContactInput inputProps={{ ...register('fullName'), type: 'text' }} />
            </Wrapper>
            <Wrapper>
               JobDescription:
               <ContactInput
                  inputProps={{ ...register('lookingForAJobDescription'), type: 'text' }}
               />
            </Wrapper>
            <Wrapper>
               AboutMe:
               <ContactInput inputProps={{ ...register('aboutMe'), type: 'text' }} />
            </Wrapper>
            <Wrapper>
               Looking for a job:
               <LookingForAJobSwitcher {...register('lookingForAJob')} />
            </Wrapper>
            <h4>Contacts:</h4>
            <ContactsWrapper>
               <ContactInput inputProps={{ ...register('contacts.facebook') }} img={facebookIcon} />
               <ContactInput inputProps={{ ...register('contacts.github') }} img={githubIcon} />
               <ContactInput
                  inputProps={{ ...register('contacts.instagram') }}
                  img={instagramIcon}
               />
               <ContactInput inputProps={{ ...register('contacts.twitter') }} img={twitterIcon} />
               <ContactInput inputProps={{ ...register('contacts.vk') }} img={vkIcon} />
               <ContactInput inputProps={{ ...register('contacts.youtube') }} img={youtubeIcon} />
               <ContactInput inputProps={{ ...register('contacts.mainLink') }} img={mainLinkIcon} />
               <ContactInput inputProps={{ ...register('contacts.website') }} img={websiteIcon} />
            </ContactsWrapper>
            <SButtonGreen>Save Changes</SButtonGreen>
         </UpdateProfileWrapper>
      </Modal>
   )
}
