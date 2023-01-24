import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'

import styled from 'styled-components'

import { SInput } from '../Input/Input'

import clear from './../../../common/icons/clear.png'

const SearchBarWrapper = styled.div`
   position: relative;
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
`

type PropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
   searchValueText: (value: string) => void
   valueSearch: string
   resetFilter: () => void
}

export const SearchBar = (props: PropsType) => {
   const { ref, ...restInputProps } = props

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      props.searchValueText(event.currentTarget.value)
   }
   const handleClean = () => {
      props.resetFilter()
   }

   return (
      <SearchBarWrapper>
         <Input value={props.valueSearch} onChange={handleChange} {...restInputProps} />
         <img onClick={handleClean} src={clear} alt="clearIcon" />
      </SearchBarWrapper>
   )
}
