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
type FormInputs = {
   email: string
   password: string
}

export const SignInForm = (props: PropsType) => {
   const dispatch = useAppDispatch()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormInputs>()

   const handleModalOpen = () => {
      props.openModal(true)
   }

   return (
      <SSignInRight>
         <SForm onSubmit={handleSubmit(data => dispatch(LoginTC(data as LoginRequestDataType)))}>
            <SInputWrapper>
               <SInput
                  type="email"
                  placeholder={'Email'}
                  {...register('email', {
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                     },
                  })}
               />
               {errors.email && <p>{errors.email.message}</p>}
            </SInputWrapper>
            <SInputWrapper>
               <SInput
                  required
                  type="password"
                  placeholder={'Password'}
                  min={7}
                  {...register('password', {
                     min: {
                        value: 7,
                        message: 'Password Must be 7 characters or more',
                     },
                  })}
               />
               {errors.password && <p>{errors.password.message}</p>}
            </SInputWrapper>
            <SButton type="submit">Sign In</SButton>
         </SForm>
         <SButtonGreen onClick={handleModalOpen}>Create new account</SButtonGreen>
      </SSignInRight>
   )
}
