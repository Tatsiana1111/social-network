import React, {
   ChangeEvent,
   DetailedHTMLProps,
   InputHTMLAttributes,
   useEffect,
   useState,
} from 'react'

import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { useAppDispatch } from '../../../app/hooks'
import { getUsersTC } from '../../../bll/usersReducer'
import useDebounce from '../../../common/Utils/useDebounce'
import { SInput } from '../Input/Input'

import clear from './../../../common/icons/clear.png'

const SearchBarWrapper = styled.div`
   position: relative;
   img {
      cursor: pointer;
      position: absolute;
      top: 0;
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
   max-width: 50%;
`

type PropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
   page?: number
   delay: number
}

export const SearchBar = (props: PropsType) => {
   const dispatch = useAppDispatch()
   const { ref, ...restInputProps } = props

   const [searchParams, setSearchParams] = useSearchParams()
   const [value, setValue] = useState<string>('')

   const searchValue = searchParams.get('term')

   const debouncedValue = useDebounce<string>(value, props.delay)

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
   }
   const handleClean = () => {
      setValue('')
   }

   useEffect(() => {
      setSearchParams({ term: `${debouncedValue}` })
      if (searchValue) {
         dispatch(getUsersTC({ term: searchValue }))
      }
   }, [debouncedValue])

   return (
      <SearchBarWrapper>
         <Input value={value} onChange={handleChange} {...restInputProps} />
         <img onClick={handleClean} src={clear} alt="clearIcon" />
      </SearchBarWrapper>
   )
}
