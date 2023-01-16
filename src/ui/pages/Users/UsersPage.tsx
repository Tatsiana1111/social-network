import React from 'react'

import styled from 'styled-components'

import { User } from './User'

const UsersWrapper = styled.section`
   width: 100%;
   h1 {
      margin: 10px 0;
   }
   .userInner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
   }
`

export const UsersPage = () => {
   return (
      <UsersWrapper>
         <h1>People You May Know</h1>
         <div className={'userInner'}>
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
         </div>
      </UsersWrapper>
   )
}
