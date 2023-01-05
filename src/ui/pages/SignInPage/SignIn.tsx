import React from 'react'

import { SButton, SButtonGreen } from '../../components/Button/SButton'
import { SForm, SInput, SInputWrapper } from '../../components/Input/Input'
import { SContainer } from '../../styles/global'

import { SSignInLeft, SSignInRight, SSignInWrapper } from './styled'

export const SignIn = () => {
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
            <SForm>
              <SInputWrapper>
                <SInput type="email" />
              </SInputWrapper>
              <SInputWrapper>
                <SInput type="password" />
              </SInputWrapper>
              <SButton>Sign In</SButton>
            </SForm>
            <SButtonGreen>Create new account</SButtonGreen>
          </SSignInRight>
        </SSignInWrapper>
      </SContainer>
    </section>
  )
}
