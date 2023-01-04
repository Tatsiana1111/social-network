import React from 'react'

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
            <form>
              <input type="email" />
              <input type="password" />
              <button>Sign In</button>
            </form>
            <button>Create new account</button>
          </SSignInRight>
        </SSignInWrapper>
      </SContainer>
    </section>
  )
}
