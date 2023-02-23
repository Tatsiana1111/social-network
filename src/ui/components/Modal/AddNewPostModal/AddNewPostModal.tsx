import React from 'react'

import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setModalOpenAC } from '../../../../bll/appReducer'
import { addPostTC } from '../../../../bll/profileReducer'
import { SButtonGreen } from '../../Button/SButton'
import { SInput } from '../../Input/Input'
import { Modal } from '../BaseModal/Modal'

type FormData = {
   title: string
   body: string
}

const WrapperDiv = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`

export const AddNewPostModal = () => {
   const dispatch = useAppDispatch()
   const userId = useAppSelector(state => state.profile.data.userId)
   const modalOpenIs = useAppSelector(state => state.app.modalOpenIs)

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
      dispatch(setModalOpenAC({ value: 'close' }))
   })

   return (
      <Modal title={'Add new post'} isOpen={modalOpenIs === 'addPostModal'}>
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
