import React from 'react'

import styled from 'styled-components'

import { SButtonGreen } from '../../Button/SButton'
import { SInput } from '../../Input/Input'
const RegistrationModalWrapper = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 8px;
   div,
   label {
      display: flex;
      gap: 5px;
      width: 100%;
   }
`

export const RegistrationModal = () => {
   return (
      <RegistrationModalWrapper>
         <div>
            <SInput type={'text'} placeholder={'Name'} />
            <SInput type={'text'} placeholder={'Surname'} />
         </div>
         <SInput type={'email'} placeholder={'Email'} />
         <SInput type={'password'} placeholder={'Password'} />
         <label htmlFor="cheese">
            <SInput type={'number'} min={1} max={31} placeholder={'Day'} />
            <SInput type={'number'} min={1} max={12} placeholder={'Month'} />
            <SInput type={'number'} min={1920} max={2020} placeholder={'Year'} />
         </label>
         <label htmlFor="cheese">
            <SInput type={'checkbox'} placeholder={'Man'} />
            <SInput type={'checkbox'} placeholder={'Female'} />
         </label>
         <SButtonGreen>Register Me</SButtonGreen>
      </RegistrationModalWrapper>
   )
}
