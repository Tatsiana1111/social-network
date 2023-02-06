import styled, { keyframes } from 'styled-components'

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

type D = {
   exit?: boolean
   success?: boolean
   error?: boolean
}

export const NotificationBarWrapper = styled.div<D>`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 300px;
   margin-left: 10px;
   margin-bottom: 10px;
   background-color: ${props => (props.error ? 'red' : 'geed')};
   animation: ${props => (props.exit ? SlideLeft : SlideRight)} 0.4s;
   animation-fill-mode: forwards;
`

export const NotificationBarItem = styled.div`
   width: 100%;

   border-radius: 20px;
   overflow: hidden;

   div {
      //display: flex;
      //align-items: center;
      //justify-content: center;
      //height: 100%;

      p {
         margin: 0;
         padding: 10px;
         text-align: center;
      }
   }
`

export const ProgressBar = styled.div`
   background-color: #65d266;
   height: 5px;
`

export const CloseModalIcon = styled.span`
   position: absolute;
   top: 10px;
   right: 10px;
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
      width: 24px;
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
