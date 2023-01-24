import React, {
   ChangeEvent,
   DetailedHTMLProps,
   InputHTMLAttributes,
   useEffect,
   useState,
} from 'react'

import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getUsersTC, setQueryParamsAC } from '../../../bll/usersReducer'
import useDebounce from '../../../common/Utils/useDebounce'
import { SInput } from '../Input/Input'

import clear from './../../../common/icons/clear.png'

const SearchBarWrapper = styled.div`
   position: relative;
   input {
   }
   img {
      cursor: pointer;
      position: absolute;
      top: 2px;
      right: 10px;
      width: 40px;
      height: 40px;
   }
`
const Input = styled(SInput)`
   font-weight: bold;
   font-size: 19px;
   letter-spacing: 3px;
   margin-bottom: 15px;
   //max-width: 50%;
`

type PropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
   // page?: number
   delay: number
}

export const SearchBar = (props: PropsType) => {
   const dispatch = useAppDispatch()
   const { ref, ...restInputProps } = props
   const queryParams = useAppSelector(state => state.users.queryParams)
   const term = useAppSelector(state => state.users.queryParams.term)
   const [searchParams, setSearchParams] = useSearchParams()

   const searchValue = searchParams.get('term') ? searchParams.get('term') + '' : ''
   const currentPage = searchParams.get('page') ? searchParams.get('page') + '' : 1

   const debouncedValue = useDebounce<string | undefined>(term, props.delay)

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setQueryParamsAC({ query: { term: event.currentTarget.value } }))
      // setValue(event.currentTarget.value)
   }
   const handleClean = () => {
      dispatch(setQueryParamsAC({ query: { term: '' } }))
      setSearchParams({ term: '' })
   }

   useEffect(() => {
      dispatch(setQueryParamsAC({ query: { term: searchValue, page: +currentPage } }))
   }, [])
   useEffect(() => {
      if (debouncedValue) {
         setSearchParams({ term: debouncedValue })
         dispatch(getUsersTC(queryParams))
      }
   }, [debouncedValue])

   return (
      <SearchBarWrapper>
         <Input value={term} onChange={handleChange} {...restInputProps} />
         <img onClick={handleClean} src={clear} alt="clearIcon" />
      </SearchBarWrapper>
   )
}
