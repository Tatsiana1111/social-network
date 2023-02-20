import React from 'react'

import { useForm } from 'react-hook-form'

import { useAppDispatch } from '../../../../app/hooks'
import { LoginTC } from '../../../../bll/authReducer'
import { LoginRequestDataType } from '../../../../dal/authAPI'
import { SButton, SButtonGreen } from '../../../components/Button/SButton'
import { SForm, SInput, SInputWrapper } from '../../../components/Input/Input'
import { SSignInRight } from '../styled'

type PropsType = {
   openModal: (value: boolean) => void
}
export const SignInForm = (props: PropsType) => {
   const dispatch = useAppDispatch()
   const { register, handleSubmit } = useForm()

   const handleModalOpen = () => {
      props.openModal(true)
   }

   return (
      <SSignInRight>
         <SForm onSubmit={handleSubmit(data => dispatch(LoginTC(data as LoginRequestDataType)))}>
            <SInputWrapper>
               <SInput {...register('email')} required type="email" placeholder={'Email'} />
            </SInputWrapper>
            <SInputWrapper>
               <SInput
                  {...register('password')}
                  required
                  type="password"
                  placeholder={'Password'}
               />
            </SInputWrapper>
            <SButton type="submit">Sign In</SButton>
         </SForm>
         <SButtonGreen onClick={handleModalOpen}>Create new account</SButtonGreen>
      </SSignInRight>
   )
}
