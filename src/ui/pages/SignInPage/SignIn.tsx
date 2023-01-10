import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import { LoginRequestDataType } from '../../../api/authAPI'
import { useAppDispatch } from '../../../app/hooks'
import { LoginTC } from '../../../bll/authReducer'
import { SButton, SButtonGreen } from '../../components/Button/SButton'
import { SForm, SInput, SInputWrapper } from '../../components/Input/Input'
import { Modal } from '../../components/Modal/Modal'
import { Container } from '../../styles/global'

import { SSignInLeft, SSignInRight, SSignInWrapper } from './styled'

export const SignIn = () => {
   const dispatch = useAppDispatch()
   const { register, handleSubmit } = useForm()
   const [isModal, setModal] = useState(false)

   const handleModalOpen = () => {
      setModal(true)
   }

   return (
      <section>
         {isModal && (
            <Modal toggleOpenMode={() => setModal(false)} title={'Registration'} open={isModal}>
               <span>some text</span>
            </Modal>
         )}
         SignInPage
         <Container>
            <SSignInWrapper>
               <SSignInLeft>
                  <h1>Lightels</h1>
                  <p>Social Network</p>
               </SSignInLeft>
               <SSignInRight>
                  <SForm
                     onSubmit={handleSubmit(data =>
                        dispatch(LoginTC(data as LoginRequestDataType))
                     )}
                  >
                     <SInputWrapper>
                        <SInput
                           {...register('email')}
                           required
                           type="email"
                           placeholder={'Email'}
                        />
                     </SInputWrapper>
                     <SInputWrapper>
                        <SInput
                           {...register('password')}
                           required
                           type="password"
                           placeholder={'Password'}
                        />
                     </SInputWrapper>
                     <SButton type="submit">Sign In</SButton>
                  </SForm>
                  <SButtonGreen onClick={handleModalOpen}>Create new account</SButtonGreen>
               </SSignInRight>
            </SSignInWrapper>
         </Container>
      </section>
   )
}
