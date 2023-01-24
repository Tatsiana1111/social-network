import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getUsersTC, setFetchingAC, updateUrlParamsAC } from '../../../bll/usersReducer'
import { filterAllParams } from '../../../common/Utils/filterAllParams'
import useDebounce from '../../../common/Utils/useDebounce'
import { GoToTopButton } from '../../components/GoToTopButton/GoToTopButton'
import { InfiniteScroll } from '../../components/InfiniteScroll/InfiniteScroll'
import { SearchBar } from '../../components/SearchBar/SearchBar'

import { UsersPageWrapper } from './styled-UsersPage'
import { User } from './User'

export const UsersPage = () => {
   const dispatch = useAppDispatch()
   const users = useAppSelector(store => store.users.users)
   const usersSearch = useAppSelector(store => store.users.usersSearch)
   const [searchParams, setSearchParams] = useSearchParams()
   const paramsSearchState = useAppSelector(state => state.users.queryParams)
   const isFetching = useAppSelector(store => store.users.isFetching)

   const termURL = searchParams.get('term') ? searchParams.get('term') + '' : ''
   const pageURL = searchParams.get('page') ? searchParams.get('page') + '' : '1'

   const [term, setTerm] = useState<string>(termURL ? termURL : '')

   const debouncedValue = useDebounce<string | undefined>(term, 1000)

   const urlParamsFilter = filterAllParams({
      page: pageURL,
      term: termURL,
   })

   useEffect(() => {
      setSearchParams({
         ...filterAllParams({
            ...paramsSearchState,
            term,
            page: pageURL,
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

      // dispatch(updateUrlParamsAC({ query: { ...paramsSearchState, page } }))

      setSearchParams({
         ...filterAllParams({
            ...paramsSearchState,
            page,
            term: termURL,
         }),
      })
   }
   const setFetchingHandler = () => {
      dispatch(setFetchingAC({ isFetching: true }))
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
         }),
      })
   }
   const resetFilterHandler = () => {
      dispatch(updateUrlParamsAC({ query: { page: '1', term: '' } }))
      setSearchParams({ page: '1' })
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
