import React, { ChangeEvent } from 'react'

import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getUsersTC, setFetchingAC, setQueryParamsAC } from '../../../bll/usersReducer'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { InfiniteScroll } from '../../components/InfiniteScroll/InfiniteScroll'
import { SearchBar } from '../../components/SearchBar/SearchBar'

import { UsersPageWrapper } from './styled-UsersPage'
import { User } from './User'

export const UsersPage = () => {
   const dispatch = useAppDispatch()
   const users = useAppSelector(store => store.users.users)
   const [searchParams, setSearchParams] = useSearchParams()
   const queryParams = useAppSelector(state => state.users.queryParams)
   // let currentPage = useAppSelector(store => store.users.queryParams.page)
   const isFetching = useAppSelector(store => store.users.isFetching)

   const currentPage = searchParams.get('page') ? searchParams.get('page') + '' : 1

   const fetchDataHandler = () => {
      // if (currentPage) {
      //    setSearchParams({ page: +currentPage + 1 + '' })
      // }
      dispatch(getUsersTC(queryParams))
   }
   const setFetchingHandler = () => {
      dispatch(setFetchingAC({ isFetching: true }))
   }

   const showUsers = () => {
      return (
         users.length &&
         users.map((user, index) => {
            return <User key={index} user={user} />
         })
      )
   }

   return (
      <UsersPageWrapper>
         <h1>People You May Know</h1>
         <SearchBar type="text" placeholder={'Search...'} delay={2000} />
         <div className={'usersWrapper'}>
            <InfiniteScroll
               className={'users'}
               fetchData={fetchDataHandler}
               setFetching={setFetchingHandler}
               isFetching={isFetching}
            >
               {showUsers()}
            </InfiniteScroll>
            <GoToTopButton />
         </div>
      </UsersPageWrapper>
   )
}
// https://www.youtube.com/watch?v=J2MWOhV8T6o
