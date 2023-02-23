import React from 'react'

import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'
import { EditButton } from '../Button/EditButton/EditButton'
import { LookingForAJobFlag } from '../lookingForAJob/lookingForAJobFlag'

import { ContactsList } from './ContactsList'
import { ProfileDataItem } from './ProfileDataItem'

const ProfileDataWrapper = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   gap: 10px;
   height: 100%;

   .EditButton {
      position: absolute;
      bottom: 0;
   }
`

export const ProfileData = () => {
   const myProfileID = useAppSelector(state => state.app.profileID)
   const fullName = useAppSelector(state => state.profile.data.fullName)
   const aboutMe = useAppSelector(state => state.profile.data.aboutMe)
   const lookingForAJobDescription = useAppSelector(
      state => state.profile.data.lookingForAJobDescription
   )
   const { profileID } = useParams()

   return (
      <ProfileDataWrapper>
         <ProfileDataItem name={'Name:'} content={fullName} />
         {aboutMe && <ProfileDataItem name={'AboutMe:'} content={aboutMe} />}
         <LookingForAJobFlag />
         {lookingForAJobDescription && (
            <ProfileDataItem name={'JobDescription:'} content={lookingForAJobDescription} />
         )}
         <ContactsList />

         {profileID && myProfileID === +profileID && (
            <EditButton name={'Change'} className={'EditButton'} />
         )}
      </ProfileDataWrapper>
   )
}
