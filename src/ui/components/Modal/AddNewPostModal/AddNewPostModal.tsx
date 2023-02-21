import React from 'react'

import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { addPostTC } from '../../../../bll/profileReducer'
import { SButtonGreen } from '../../Button/SButton'
import { SInput } from '../../Input/Input'
import { Modal } from '../BaseModal/Modal'

export type ModalPropsType = {
   isModalOpen: boolean
   handleModalClose: () => void
}

type FormData = {
   title: string
   body: string
}

const WrapperDiv = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`

export const AddNewPostModal = (props: ModalPropsType) => {
   const dispatch = useAppDispatch()
   const userId = useAppSelector(state => state.profile.data.userId)

   const { register, handleSubmit, reset } = useForm<FormData>({
      defaultValues: {
         title: '',
         body: '',
      },
   })

   const onSubmit = handleSubmit(data => {
      const randomNumber = Math.random() * 5
      const id = Math.floor(randomNumber)

      dispatch(addPostTC({ userId, title: data.title, body: data.body, id }))
      reset()
      props.handleModalClose()
   })

   return (
      <Modal title={'Add new post'} isOpen={props.isModalOpen} closeModal={props.handleModalClose}>
         <form onSubmit={onSubmit}>
            <WrapperDiv>
               <SInput type="text" placeholder="Title" {...register('title')} />
               <SInput type="text" placeholder="Post text" {...register('body')} />
               <SButtonGreen type={'submit'}>Add post</SButtonGreen>
            </WrapperDiv>
         </form>
      </Modal>
   )
}
