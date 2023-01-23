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
import { getUsersParamsType } from '../../../dal/usersAPI'
import { SInput } from '../Input/Input'

const SearchBarWrapper = styled(SInput)`
   color: red;
`

type PropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
   page?: number
}

export const SearchBar = (props: PropsType) => {
   const dispatch = useAppDispatch()
   const { ref, ...restInputProps } = props

   const [searchParams, setSearchParams] = useSearchParams()
   const [value, setValue] = useState<string>('')

   const searchValue = searchParams.get('term')

   const debouncedValue = useDebounce<string>(value, 500)

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
   }

   useEffect(() => {
      setSearchParams({ term: `${debouncedValue}` })
      if (searchValue) {
         dispatch(getUsersTC({ page: props.page, term: searchValue }))
      }
   }, [debouncedValue])

   return <SearchBarWrapper value={value} onChange={handleChange} {...restInputProps} />
}
