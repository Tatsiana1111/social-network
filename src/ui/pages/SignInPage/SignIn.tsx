import React, { useState } from 'react'

import { AnimatePresence } from 'framer-motion'

import { Modal } from '../../components/Modal/BaseModal/Modal'
import { RegistrationModal } from '../../components/Modal/RegistrationModal/RegistrationModal'
import { Container } from '../../theme/global'

import { SignInForm } from './SignInForm/SignInForm'
import { SSignInLeft, SSignInWrapper } from './styled'

export const SignIn = () => {
   const [isModalOpen, setModalOpen] = useState(false)

   const handleModalOpen = (value: boolean) => {
      setModalOpen(value)
   }
   const handleModalClose = () => {
      setModalOpen(false)
   }

   return (
      <section>
         <AnimatePresence>
            <Modal closeModal={handleModalClose} title={'Registration'} isOpen={isModalOpen}>
               <RegistrationModal />
            </Modal>
         </AnimatePresence>
         <Container>
            <SSignInWrapper>
               <SSignInLeft>
                  <h1>Lightels</h1>
                  <p>Social Network</p>
               </SSignInLeft>
               <SignInForm openModal={handleModalOpen} />
            </SSignInWrapper>
         </Container>
      </section>
   )
}
