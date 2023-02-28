import React, { useEffect, useState } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getUsersTC, resetUsersState, updateUrlParamsAC } from '../../../bll/usersReducer'
import { filterAllParams } from '../../../common/Utils/filterAllParams'
import useDebounce from '../../../common/Utils/useDebounce'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { Loader } from '../../components/Loader/Loader'
import { SearchBar } from '../../components/SearchBar/SearchBar'

import { UsersPageWrapper } from './styled-UsersPage'
import { User } from './User'

export const UsersPage = () => {
   const dispatch = useAppDispatch()
   const users = useAppSelector(store => store.users.users)
   const usersSearch = useAppSelector(store => store.users.usersSearch)
   const [searchParams, setSearchParams] = useSearchParams()
   const paramsSearchState = useAppSelector(state => state.users.queryParams)
   const hasMore = useAppSelector(store => store.users.hasMore)

   const termURL = searchParams.get('term') ? searchParams.get('term') + '' : ''
   const pageURL = searchParams.get('page') ? searchParams.get('page') + '' : '1'
   const friend = searchParams.get('friend') ? searchParams.get('friend') + '' : 'false'

   const [term, setTerm] = useState<string>(termURL ? termURL : '')

   const debouncedValue = useDebounce<string | undefined>(term, 1000)

   const urlParamsFilter = filterAllParams({
      page: pageURL,
      term: termURL,
      friend,
   })

   useEffect(() => {
      dispatch(resetUsersState())
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }, [friend])

   useEffect(() => {
      setSearchParams({
         ...filterAllParams({
            ...paramsSearchState,
            term,
            page: pageURL,
            friend,
         }),
      })
   }, [debouncedValue])

   useEffect(() => {
      if (JSON.stringify(paramsSearchState) !== JSON.stringify(urlParamsFilter)) {
         dispatch(updateUrlParamsAC({ query: { ...urlParamsFilter } }))
      }
   }, [dispatch, urlParamsFilter])

   useEffect(() => {
      if (JSON.stringify(paramsSearchState) === JSON.stringify(urlParamsFilter)) {
         dispatch(getUsersTC())
      }
   }, [dispatch, paramsSearchState])
   const fetchDataHandler = () => {
      const page = (Number(pageURL) + 1).toString()

      setSearchParams({
         ...filterAllParams({
            ...paramsSearchState,
            page,
            term: termURL,
            friend,
         }),
      })
   }

   const showUsers = () => {
      if (usersSearch.length) {
         return usersSearch.map((user, index) => {
            return <User key={index} user={user} />
         })
      }

      return users.map((user, index) => {
         return <User key={index} user={user} />
      })
   }

   const searchValueTextHandler = (value: string) => {
      setTerm(value)
      setSearchParams({
         ...filterAllParams({
            ...paramsSearchState,
            page: '1',
            term: termURL,
            friend,
         }),
      })
   }
   const resetFilterHandler = () => {
      dispatch(updateUrlParamsAC({ query: { page: '1', term: '', friend } }))
      setSearchParams({ page: '1', friend })
      setTerm('')
   }

   return (
      <UsersPageWrapper>
         <h1>People You May Know</h1>
         <SearchBar
            type="text"
            placeholder={'Search...'}
            searchValueText={searchValueTextHandler}
            valueSearch={term}
            resetFilter={resetFilterHandler}
         />
         <div className={'usersWrapper'}>
            <InfiniteScroll
               dataLength={showUsers().length}
               next={fetchDataHandler}
               hasMore={hasMore}
               loader={<Loader />}
               className={'users'}
            >
               {showUsers()}
            </InfiniteScroll>
            <GoToTopButton />
         </div>
      </UsersPageWrapper>
   )
}
// https://www.npmjs.com/package/react-infinite-scroll-component
