import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
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
   searchValueText: (value: string) => void
   valueSearch: string
}

export const SearchBar = (props: PropsType) => {
   const dispatch = useAppDispatch()
   const { ref, ...restInputProps } = props

   const term = useAppSelector(state => state.users.queryParams.term)

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      props.searchValueText(event.currentTarget.value)
   }
   const handleClean = () => {
      // dispatch(setQueryParamsAC({ query: { term: '' } }))
      // setSearchParams({ term: '' })
   }
   //
   // useEffect(() => {
   //    dispatch(setQueryParamsAC({ query: { term: searchValue, page: +currentPage } }))
   // }, [])
   // useEffect(() => {
   //    if (debouncedValue) {
   //       setSearchParams({ term: debouncedValue })
   //       dispatch(getUsersTC(queryParams))
   //    }
   // }, [debouncedValue])

   return (
      <SearchBarWrapper>
         <Input value={props.valueSearch} onChange={handleChange} {...restInputProps} />
         <img onClick={handleClean} src={clear} alt="clearIcon" />
      </SearchBarWrapper>
   )
}
