import React from 'react'

import { useForm } from 'react-hook-form'

import { LoginRequestDataType } from '../../../api/authAPI'
import { useAppDispatch } from '../../../app/hooks'
import { LoginTC } from '../../../bll/authReducer'
import { SButton, SButtonGreen } from '../../components/Button/SButton'
import { SForm, SInput, SInputWrapper } from '../../components/Input/Input'
import { SContainer } from '../../styles/global'

import { SSignInLeft, SSignInRight, SSignInWrapper } from './styled'

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm()

  return (
    <section>
      SignInPage
      <SContainer>
        <SSignInWrapper>
          <SSignInLeft>
            <h1>Lightels</h1>
            <p>Social Network</p>
          </SSignInLeft>
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
            <SButtonGreen>Create new account</SButtonGreen>
          </SSignInRight>
        </SSignInWrapper>
      </SContainer>
    </section>
  )
}
