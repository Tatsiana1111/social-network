import React, {
   ChangeEvent,
   DetailedHTMLProps,
   InputHTMLAttributes,
   useEffect,
   useState,
} from 'react'

import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import useDebounce from '../../../common/Utils/useDebounce'
import { SInput } from '../Input/Input'

const SearchBarWrapper = styled(SInput)`
   color: red;
`

type PropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
   query?: string
}

export const SearchBar = (props: PropsType) => {
   const { query, ref, ...restInputProps } = props

   const [searchParams, setSearchParams] = useSearchParams()

   const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchParams({ term: `${e.currentTarget.value}` })
   }
   const searchValue = searchParams.get('term')

   console.log(searchValue)

   const [value, setValue] = useState<string>('')
   const debouncedValue = useDebounce<string>(value, 500)

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
   }

   // Fetch API (optional)
   useEffect(() => {
      // Do fetch here...
      // Triggers when "debouncedValue" changes
   }, [debouncedValue])

   return <SearchBarWrapper onChange={searchHandler} {...restInputProps} />
}
