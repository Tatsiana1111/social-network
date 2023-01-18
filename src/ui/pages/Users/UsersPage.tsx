import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { followUserTC, getUsersTC, setFetching, unfollowUserTC } from '../../../bll/usersReducer'
import { UserItemsType } from '../../../dal/usersAPI'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { InfiniteScroll } from '../../components/InfiniteScroll/InfiniteScroll'

import { User } from './User'

const Wrapper = styled.section`
   width: 100%;

   h1 {
      margin: 10px 0;
   }

   .usersWrapper {
      display: grid;
      grid-template-columns: 9fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 10px;
   }

   .users {
      grid-area: 1 / 1 / 2 / 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
   }
`

export const UsersPage = () => {
   const dispatch = useAppDispatch()
   const users = useAppSelector(store => store.users.users)
   const currentPage = useAppSelector(store => store.users.currentPage)
   const isFetching = useAppSelector(store => store.users.isFetching)

   const fetchData = () => {
      dispatch(getUsersTC({ page: currentPage }))
   }
   const setFetchingd = () => {
      dispatch(setFetching({ isFetching: true }))
   }

   return (
      <Wrapper>
         <h1>People You May Know</h1>
         <div className={'usersWrapper'}>
            <InfiniteScroll
               className={'users'}
               fetchData={fetchData}
               setFetching={setFetchingd}
               isFetching={isFetching}
               items={users}
            />
            <GoToTopButton />
         </div>
      </Wrapper>
   )
}
// https://www.youtube.com/watch?v=J2MWOhV8T6o
