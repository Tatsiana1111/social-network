import styled, { css, keyframes } from 'styled-components'

import { NotificationType } from '../../../bll/appReducer'

const SlideRight = keyframes`
  from {
    margin-left: -120%;
  }

  to {
    margin-left: 0;
  }
`
const SlideLeft = keyframes`
  from {
    margin-left: 0;
  }

  to {
    left: -120%;
  }
`

export const AlertWrapper = styled.div<Pick<NotificationType, 'type'> & { exit: boolean }>`
   display: none;
   position: relative;
   border-radius: 15px;
   color: #fff;
   margin-top: 33px;
   animation: ${props => (props.exit ? SlideLeft : SlideRight)} 0.4s;
   animation-fill-mode: forwards;

   ${props => {
      switch (props.type) {
         case 'error':
            return css`
               display: block;
               background-color: #c6271a;
            `
         case 'success':
            return css`
               display: block;
               background-color: #3bc74a;
            `
      }
   }}
`

export const AlertItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 3px;
   overflow: hidden;
   p {
      margin: 0;
      padding: 10px;
      text-align: center;
   }
`

export const ProgressBar = styled.div<Pick<NotificationType, 'type'>>`
   height: 5px;

   ${props => {
      switch (props.type) {
         case 'error':
            return css`
               background-color: #65d266;
            `
         case 'success':
            return css`
               display: block;
               background-color: white;
            `
      }
   }}
`

export const CloseAlertIcon = styled.span`
   position: absolute;
   top: -20px;
   right: -20px;
   width: 24px;
   height: 24px;
   opacity: 0.5;
   cursor: pointer;
   transition: opacity ease 0.5s;

   &:hover {
      opacity: 1;
   }

   ::before,
   ::after {
      content: '';
      position: absolute;
      top: 10px;
      display: block;
      width: 15px;
      height: 3px;
      background: #000;
   }

   ::before {
      transform: rotate(45deg);
   }

   ::after {
      transform: rotate(-45deg);
   }
`
export const AlertIcon = styled.img`
   position: absolute;
   top: -43px;
   width: 40px;
   height: 40px;
`
