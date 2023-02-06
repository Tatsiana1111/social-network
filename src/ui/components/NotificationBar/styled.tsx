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
   display: ${props => (props.error ? 'block' : 'none')};
   position: fixed;
   bottom: 10px;
   left: 10px;
   width: 300px;

   border-radius: 15px;
   color: #fff;
   background-color: ${props => (props.error ? '#C6271A' : 'geed')};
   animation: ${props => (props.exit ? SlideLeft : SlideRight)} 0.4s;
   animation-fill-mode: forwards;
`

export const NotificationBarItem = styled.div`
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

export const ProgressBar = styled.div`
   background-color: #65d266;
   height: 5px;
`

export const CloseModalIcon = styled.span`
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
   top: -40px;
   width: 40px;
   height: 40px;
`
