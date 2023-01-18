import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getUsersTC, setFetchingAC } from '../../../bll/usersReducer'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { InfiniteScroll } from '../../components/InfiniteScroll/InfiniteScroll'

import { UsersPageWrapper } from './styled-UsersPage'
import { User } from './User'

export const UsersPage = () => {
   const dispatch = useAppDispatch()
   const users = useAppSelector(store => store.users.users)
   const currentPage = useAppSelector(store => store.users.currentPage)
   const isFetching = useAppSelector(store => store.users.isFetching)

   const fetchData = () => {
      dispatch(getUsersTC({ page: currentPage }))
   }
   const setFetching = () => {
      dispatch(setFetchingAC({ isFetching: true }))
   }

   return (
      <UsersPageWrapper>
         <h1>People You May Know</h1>
         <div className={'usersWrapper'}>
            <InfiniteScroll
               className={'users'}
               fetchData={fetchData}
               setFetching={setFetching}
               isFetching={isFetching}
            >
               {users.length &&
                  users.map((user, index) => {
                     return <User key={index} user={user} />
                  })}
            </InfiniteScroll>
            <GoToTopButton />
         </div>
      </UsersPageWrapper>
   )
}
// https://www.youtube.com/watch?v=J2MWOhV8T6o
