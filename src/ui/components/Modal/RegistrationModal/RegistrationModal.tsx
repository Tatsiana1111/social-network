import React from 'react'

import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { SButtonGreen } from '../../Button/SButton'
import { SInput } from '../../Input/Input'
import { RadioInput } from '../../Input/RadioInput'
const RegistrationModalWrapper = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 8px;
   div,
   .wrapp {
      display: flex;
      justify-content: space-between;
      gap: 5px;
      width: 100%;
   }
`

export const RegistrationModal = () => {
   const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
   } = useForm({
      defaultValues: {
         name: '' as string,
         surname: '' as string,
         email: '' as string,
         password: '' as string,
         date: { day: 0 as number, month: 0 as number, year: 0 as number },
         gender: 'male' as 'male' | 'female',
      },
   })

   return (
      <RegistrationModalWrapper
         onSubmit={handleSubmit((data: any) => {
            alert(JSON.stringify(data, null, 2))
         })}
      >
         <div className={'wrapp'}>
            <SInput
               type={'text'}
               placeholder={'Name'}
               {...register('name', { required: 'Please enter your first name.' })}
            />
            <SInput
               type={'text'}
               placeholder={'Surname'}
               {...register('surname', { required: 'Please enter your surname.' })}
            />
         </div>
         <SInput
            type={'email'}
            placeholder={'Email'}
            {...register('email', { required: 'Please enter your email' })}
         />
         <SInput
            type={'password'}
            placeholder={'Password'}
            {...register('password', { required: 'Password is required' })}
         />
         <div>
            <SInput
               type={'number'}
               min={1}
               max={31}
               placeholder={'Day'}
               {...register('date.day', { required: 'Please enter the day when you born' })}
            />
            <SInput
               type={'number'}
               min={1}
               max={12}
               placeholder={'Month'}
               {...register('date.month', { required: 'Please enter the month when you born' })}
            />
            <SInput
               type={'number'}
               min={1920}
               max={2020}
               placeholder={'Year'}
               {...register('date.year', { required: 'Please enter the year when you born' })}
            />
         </div>
         <div className={'wrapp'}>
            <RadioInput
               value={'male'}
               {...register('gender', { required: 'Please enter your gender' })}
            />
            <RadioInput
               value={'female'}
               {...register('gender', { required: 'Please enter your gender' })}
            />
         </div>

         <SButtonGreen type="submit">Register Me</SButtonGreen>
      </RegistrationModalWrapper>
   )
}