import React from 'react'

import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'
import { EditButton } from '../Button/EditButton/EditButton'

import { ContactsList } from './ContactsList'

const ProfileDataWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 10px;
   height: 100%;
`

export const ProfileData = (props: { open: () => void }) => {
   const fullName = useAppSelector(state => state.profile.data.fullName)
   const aboutMe = useAppSelector(state => state.profile.data.aboutMe)
   const lookingForAJob = useAppSelector(state => state.profile.data.lookingForAJob)
   const lookingForAJobDescription = useAppSelector(
      state => state.profile.data.lookingForAJobDescription
   )
   const handleModalOpen = () => {
      props.open()
   }

   return (
      <ProfileDataWrapper>
         <h4>Name: {fullName}</h4>
         {aboutMe && <h4>AboutMe: {aboutMe}</h4>}
         {lookingForAJob && <h4>lookingForAJob: {lookingForAJob}</h4>}
         {lookingForAJobDescription && <h4>JobDescription: {lookingForAJobDescription}</h4>}

         <ContactsList />
         <EditButton onClick={handleModalOpen} name={'Change'} />
      </ProfileDataWrapper>
   )
}
