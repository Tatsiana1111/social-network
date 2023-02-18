import React, { useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { updateProfile } from '../../../bll/profileReducer'
import settingsIcon from '../../../common/icons/icons8-gears-50.png'
import { UpdateProfileFormType } from '../../../dal/profileAPI'

import { UpdateProfileWrapper } from './styled'

export const UpdateProfileForm = () => {
   const myProfileID = useAppSelector(state => state.app.profileID)
   const dispatch = useAppDispatch()
   const { profileID } = useParams()
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userAboutMeInfo = useAppSelector(state => state.profile.data.aboutMe)
   const skills = useAppSelector(state => state.profile.data.lookingForAJobDescription)

   const defaultValues = {
      fullName: profileName,
      aboutMe: userAboutMeInfo,
      lookingForAJobDescription: skills,
   }

   const { register, handleSubmit } = useForm<UpdateProfileFormType>({ defaultValues })
   const [editMode, setEditMode] = useState(false)
   const onSubmit: SubmitHandler<UpdateProfileFormType> = data => {
      dispatch(updateProfile(data))
      setEditMode(false)
   }

   const updateProfileHandler = () => {
      setEditMode(true)
   }

   return (
      <UpdateProfileWrapper>
         {!editMode && (
            <>
               <div className="name">{profileName}</div>
               <div className="aboutMe">{userAboutMeInfo}</div>
               <div className="skills">{skills}</div>
            </>
         )}
         {editMode && (
            <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <input defaultValue={defaultValues.fullName} {...register('fullName')} />
               </div>
               <div>
                  <input defaultValue={defaultValues.aboutMe} {...register('aboutMe')} />
               </div>
               <div>
                  <input
                     defaultValue={defaultValues.lookingForAJobDescription}
                     {...register('lookingForAJobDescription')}
                  />
               </div>
               <div>
                  <input type="submit" name="Save" />
               </div>
            </form>
         )}
         {profileID
            ? myProfileID === +profileID && (
                 <>
                    <button className="button" onClick={updateProfileHandler}></button>
                    <img src={settingsIcon} alt="setting" />
                 </>
              )
            : ''}
      </UpdateProfileWrapper>
   )
}