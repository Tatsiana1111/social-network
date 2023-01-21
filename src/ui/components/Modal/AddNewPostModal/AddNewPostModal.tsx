import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { addPostTC } from '../../../../bll/profileReducer'
import { Modal } from '../BaseModal/Modal'

import { WrapperDiv } from './styled'

type AddModalPropsType = {
   isModalOpen: boolean
   handleModalClose: () => void
}

type FormData = {
   title: string
   body: string
}
export const AddNewPostModal = (props: AddModalPropsType) => {
   const dispatch = useAppDispatch()
   const userId = useAppSelector(state => state.profile.data.userId)

   const { register, handleSubmit, reset, setValue } = useForm<FormData>({
      defaultValues: {
         title: '',
         body: '',
      },
   })

   const onSubmit = handleSubmit(data => {
      dispatch(addPostTC({ userId: userId, title: data.title, body: data.body }))
      reset()
      props.handleModalClose()
   })

   return (
      <Modal title={'Add new post'} isOpen={props.isModalOpen} closeModal={props.handleModalClose}>
         <form onSubmit={onSubmit}>
            <WrapperDiv>
               <input type="text" placeholder="Add title" {...register('title')} />
               <input type="text" placeholder="Add post text" {...register('body')} />
               <button>Add post</button>
            </WrapperDiv>
         </form>
      </Modal>
   )
}
