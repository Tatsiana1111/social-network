import React from 'react'

import { SContainer } from '../../styles/global'

import { SHeader, SHeaderInner } from './styled'

export const Header = () => {
  return (
    <SHeader>
      <SContainer>
        <SHeaderInner>
          <h1>lightels</h1>
          <div>
            <button>Sign in</button>
            <button>Registration</button>
          </div>
        </SHeaderInner>
      </SContainer>
    </SHeader>
  )
}
