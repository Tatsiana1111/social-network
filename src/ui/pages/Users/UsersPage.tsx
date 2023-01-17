import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getUsersTC, setFetching } from '../../../bll/usersReducer'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'

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
   // const totalCount = useAppSelector(store => store.users.totalCount)
   const currentPage = useAppSelector(store => store.users.currentPage)
   const isFetching = useAppSelector(store => store.users.isFetching)

   useEffect(() => {
      if (isFetching) {
         dispatch(getUsersTC({ page: currentPage }))
      }
   }, [isFetching])

   useEffect(() => {
      document.addEventListener('scroll', scrollHandler)

      return function () {
         document.removeEventListener('scroll', scrollHandler)
      }
   }, [])

   const scrollHandler = (e: any) => {
      //TODO need to fix any +  (&& users.length < totalCount)

      const scrollHeight = e.target.documentElement.scrollHeight
      const scrollTop = e.target.documentElement.scrollTop
      const innerHeight = window.innerHeight
      const condition = scrollHeight - (scrollTop + innerHeight) < 100

      if (condition) {
         dispatch(setFetching({ isFetching: true }))
      }
   }

   return (
      <UsersWrapper>
         <h1>People You May Know</h1>
         <div className={'userInner'}>
            {users.length &&
               users.map((user, index) => {
                  return <User key={index} user={user} />
               })}
         </div>
         <GoToTopButton />
      </UsersWrapper>
   )
}
// https://www.youtube.com/watch?v=J2MWOhV8T6o
