import React, { useEffect } from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
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
   const users = useAppSelector(store => store.users.users)

   useEffect(() => {
      dispatch(getUsersTC())
   }, [dispatch])

   return (
      <UsersWrapper>
         <h1>People You May Know</h1>
         <div className={'userInner'}>
            {users.map((user, index) => {
               return <User key={index} user={user} />
            })}
         </div>
      </UsersWrapper>
   )
}
