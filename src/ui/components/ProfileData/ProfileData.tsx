import React from 'react'

import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'
import { EditButton } from '../Button/EditButton/EditButton'
import { LookingForAJobFlag } from '../lookingForAJob/lookingForAJobFlag'

import { ContactsList } from './ContactsList'
import { ProfileDataItem } from './ProfileDataItem'

const ProfileDataWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 10px;
   height: 100%;
   width: 100%;

   .EditButton {
      justify-self: center;
   }
`

export const ProfileData = (props: { open: () => void }) => {
   const fullName = useAppSelector(state => state.profile.data.fullName)
   const aboutMe = useAppSelector(state => state.profile.data.aboutMe)
   const lookingForAJobDescription = useAppSelector(
      state => state.profile.data.lookingForAJobDescription
   )
   const handleModalOpen = () => {
      props.open()
   }

   return (
      <ProfileDataWrapper>
         <ProfileDataItem name={'Name:'} content={fullName} />
         {aboutMe && <ProfileDataItem name={'AboutMe:'} content={aboutMe} />}
         <LookingForAJobFlag />
         {lookingForAJobDescription && (
            <ProfileDataItem name={'JobDescription:'} content={lookingForAJobDescription} />
         )}
         <ContactsList />
         <EditButton onClick={handleModalOpen} name={'Change'} className={'EditButton'} />
      </ProfileDataWrapper>
   )
}
