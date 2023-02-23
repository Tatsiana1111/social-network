import React from 'react'

import { Container } from '../../theme/global'

import { SignInForm } from './SignInForm/SignInForm'
import { SSignInLeft, SSignInWrapper } from './styled'

export const SignIn = () => {
   return (
      <section>
         <Container>
            <SSignInWrapper>
               <SSignInLeft>
                  <h1>Lightels</h1>
                  <p>Social Network</p>
               </SSignInLeft>
               <SignInForm />
            </SSignInWrapper>
         </Container>
      </section>
   )
}
