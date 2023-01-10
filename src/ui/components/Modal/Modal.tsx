import React, { ReactNode } from 'react'

import styled from 'styled-components'

const ModalWrapper = styled.div`
   display: none;
   position: fixed;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   z-index: 999;
   opacity: 0;
   transition: 0.5s;
   &.open {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
   }
`
const ModalContent = styled.div`
   padding: 20px;
   border-radius: 12px;
   background-color: white;
   height: 400px;
   width: 400px;
   overflow: auto;
   box-shadow: 0 0 70px 10px #000;
   border: 8px solid #fff;
   transform: scale(0.5);
   transition: 0.4s all;
   &.open {
      transform: scale(1);
   }
`

type ModalPropsType = {
   children: ReactNode
   title: string
   isOpen: boolean
   // toggleOpenMode: (value: boolean) => void
   closeModal: () => void
}
export const Modal = (props: ModalPropsType) => {
   const modalClickHandler = (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation()
   }
   const handleClose = () => {
      props.closeModal()
   }

   return (
      <ModalWrapper className={props.isOpen ? 'open' : ''} onClick={handleClose}>
         <ModalContent className={props.isOpen ? 'open' : ''} onClick={modalClickHandler}>
            <h2>{props.title}</h2>
            <button onClick={handleClose}>close</button>
            <hr />
            {props.children}
         </ModalContent>
      </ModalWrapper>
   )
}
