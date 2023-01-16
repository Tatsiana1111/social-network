import React, { useEffect } from 'react'

import styled from 'styled-components'

import { useAppDispatch } from '../../../app/hooks'
import { getUsersTC } from '../../../bll/usersReducer'

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
   const dispatch = useAppDispatch()

   useEffect(() => {
      alert('yo')
      dispatch(getUsersTC())
   }, [dispatch])

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
