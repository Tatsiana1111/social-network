import styled, { keyframes } from 'styled-components'

const pulsation = keyframes`
  0% {
    transform: scale(0.98);
  } 
   50%{
      transform: scale(1);
   }
  100% {
     transform: scale(0.98);
  }
`

export const ErrorMessage = styled.p`
   text-align: center;
   color: red;
   animation: ${pulsation} 1s ease-in-out infinite;
`
