import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setModalOpenAC } from '../../../../bll/appReducer'
import { LoginTC } from '../../../../bll/authReducer'
import { LoginRequestDataType } from '../../../../dal/authAPI'
import { SButton, SButtonGreen } from '../../../components/Button/SButton'
import { ErrorMessage } from '../../../components/ErrorMessage/ErrorMessage'
import { SForm, SInput } from '../../../components/Input/Input'
import { SSignInRight } from '../styled'

type FormInputs = {
   email: string
   password: string
   captcha: null | string
}

export const SignInForm = () => {
   const dispatch = useAppDispatch()
   const loading = useAppSelector(state => state.app.status)
   const captcha = useAppSelector(state => state.auth.captcha)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormInputs>({ defaultValues: { email: 'free@samuraijs.com', password: 'free' } })

   const handleModalOpen = () => {
      dispatch(setModalOpenAC({ value: 'registrationModal' }))
   }

   return (
      <AnimatePresence>
         <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.5 }}
         >
            <SSignInRight>
               <SForm
                  onSubmit={handleSubmit(data => dispatch(LoginTC(data as LoginRequestDataType)))}
               >
                  <SInput
                     style={errors.email && { border: '1px solid red' }}
                     type="email"
                     placeholder={'Email'}
                     {...register('email', {
                        pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                           message: 'Invalid email address',
                        },
                        required: 'This field is required !!!',
                     })}
                  />
                  {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                  <SInput
                     type="password"
                     placeholder={'Password'}
                     min={4}
                     style={errors.password && { border: '1px solid red' }}
                     {...register('password', {
                        minLength: {
                           value: 4,
                           message: 'Password Must be 4 characters or more',
                        },
                        required: 'this field is required!!',
                     })}
                  />
                  {captcha && <img src={captcha} alt={'captcha icon'} />}
                  {captcha && (
                     <SInput
                        type="captcha"
                        placeholder={'captcha'}
                        {...register('captcha', {
                           required: 'This field is required !!!',
                        })}
                     />
                  )}
                  {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

                  <SButton disabled={loading === 'load'} type="submit">
                     Sign In
                  </SButton>
               </SForm>
               <SButtonGreen disabled={loading === 'load'} onClick={handleModalOpen}>
                  Create new account
               </SButtonGreen>
            </SSignInRight>
         </motion.div>
      </AnimatePresence>
   )
}
