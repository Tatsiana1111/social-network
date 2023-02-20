import React from 'react'

import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { useAppDispatch } from '../../../../app/hooks'
import { LoginTC } from '../../../../bll/authReducer'
import { LoginRequestDataType } from '../../../../dal/authAPI'
import { SButton, SButtonGreen } from '../../../components/Button/SButton'
import { SForm, SInput } from '../../../components/Input/Input'
import { SSignInRight } from '../styled'

const ErrorMessage = styled.p`
   color: red;
`

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
            <SInput
               style={errors.email && { border: '1px solid red' }}
               type="email"
               placeholder={'Email'}
               {...register('email', {
                  pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                     message: 'Invalid email address',
                  },
                  required: 'this field is required!!',
               })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <SInput
               type="password"
               placeholder={'Password'}
               min={7}
               style={errors.password && { border: '1px solid red' }}
               {...register('password', {
                  minLength: {
                     value: 7,
                     message: 'Password Must be 7 characters or more',
                  },
                  required: 'this field is required!!',
               })}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

            <SButton type="submit">Sign In</SButton>
         </SForm>
         <SButtonGreen onClick={handleModalOpen}>Create new account</SButtonGreen>
      </SSignInRight>
   )
}
