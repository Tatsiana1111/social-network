import React, { useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { updateProfile } from '../../../bll/profileReducer'
import { ProfileDataType, UpdateProfileFormType } from '../../../dal/profileAPI'
import { EditableSpan } from '../EditableSpan/EditableSpan'

interface IFormInput {
   firstName: String
}

export const UpdateProfileForm = () => {
   const { register, handleSubmit } = useForm<UpdateProfileFormType>()
   const [editMode, setEditMode] = useState(false)
   const onSubmit: SubmitHandler<UpdateProfileFormType> = data => {
      dispatch(updateProfile(data))
      setEditMode(false)
   }

   const dispatch = useAppDispatch()
   const profileName = useAppSelector(state => state.profile.data.fullName)
   const userAboutMeInfo = useAppSelector(state => state.profile.data.aboutMe)
   const skills = useAppSelector(state => state.profile.data.lookingForAJobDescription)
   const updateProfileHandler = () => {
      setEditMode(true)
   }

   return (
      <>
         {!editMode && (
            <>
               <div>{profileName}</div>
               <div>{userAboutMeInfo}</div>
               <div>{skills}</div>
            </>
         )}
         {editMode && (
            <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <input {...register('fullName')} />
               </div>
               <div>
                  <input {...register('aboutMe')} />
               </div>
               <div>
                  <input {...register('lookingForAJobDescription')} />
               </div>
               <div>
                  <input type="submit" name="Save" />
               </div>
            </form>
         )}
         <button onClick={updateProfileHandler}>Edit mode</button>
      </>
   )
}
