import React from 'react'

import { Container } from '../../theme/global'

import { SignInBrand } from './SignInBrand/SignInBrand'
import { SignInForm } from './SignInForm/SignInForm'
import { SSignInWrapper } from './styled'

export const SignIn = () => {
   return (
      <section>
         <Container>
            <SSignInWrapper>
               <SignInBrand />
               <SignInForm />
            </SSignInWrapper>
         </Container>
      </section>
   )
}
