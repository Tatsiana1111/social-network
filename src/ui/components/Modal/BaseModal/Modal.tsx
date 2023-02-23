import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setModalOpenAC } from '../../../../bll/appReducer'
import exitIcon from '../../../../common/icons/exit-icon.svg'
import { AddNewPostModal } from '../AddNewPostModal/AddNewPostModal'
import { RegistrationModal } from '../RegistrationModal/RegistrationModal'
import { UpdateProfileModal } from '../UpdateProfileModal/UpdateProfileModal'

const ModalWrapper = styled.div`
   display: none;
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   z-index: 999;

   transition: 0.5s;
   &.open {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: darkcyan;
   }
`
const ModalContent = styled.div`
   padding: 20px;
   border-radius: 12px;
   background-color: ${props => props.theme.colors.backGroundColor2};
   width: 400px;
   overflow: auto;
   box-shadow: 0 0 70px 10px #000;
   border: 8px solid #fff;
   transform: scale(0.5);
   transition: 0.4s all;
   &.open {
      transform: scale(1);
   }
   .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: inherit;
      margin-bottom: 20px;
      h2 {
         color: white;
         text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
      }
      img {
         cursor: pointer;
      }
      img:hover {
         transform: scale(1.1);
      }
   }
`

type ModalPropsType = {
   children: ReactNode
   title: string
   isOpen: boolean
}
export const Modal = (props: ModalPropsType) => {
   const dispatch = useAppDispatch()
   const modalClickHandler = (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation()
   }
   const handleClose = () => {
      dispatch(setModalOpenAC({ value: 'close' }))
   }

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, zIndex: '44' }}
         exit={{ opacity: 0 }}
      >
         <ModalWrapper className={props.isOpen ? 'open' : ''} onClick={handleClose}>
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
               <ModalContent className={props.isOpen ? 'open' : ''} onClick={modalClickHandler}>
                  <div className={'header'}>
                     <h2>{props.title}</h2>
                     <img src={exitIcon} alt={'exit-icon'} onClick={handleClose} />
                  </div>
                  {props.children}
               </ModalContent>
            </motion.div>
         </ModalWrapper>
      </motion.div>
   )
}
export const ShowModal = () => {
   const modalOpenIs = useAppSelector(state => state.app.modalOpenIs)

   const showModalHelper = () => {
      switch (modalOpenIs) {
         case 'addPostModal':
            return <AddNewPostModal />
         case 'registrationModal':
            return <RegistrationModal />
         case 'updateProfileModal':
            return <UpdateProfileModal />
         default:
            return <></>
      }
   }

   return <div>{showModalHelper()}</div>
}
