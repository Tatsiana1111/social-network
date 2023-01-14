import React from 'react'

import styled, { keyframes } from 'styled-components'

import { useAppSelector } from '../../../app/hooks'

const animFw = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`
const LoaderWrapper = styled.div`
   height: 6px;
   width: 100%;
`
const LoaderStyle = styled.div<{ start: string }>`
   display: ${({ start }) => (start === 'load' ? 'block' : 'none')};
   width: 100%;
   height: 6px;
   background: rgba(255, 255, 255, 0.15);
   position: relative;
   overflow: hidden;
   &:after {
      content: '';
      width: 100%;
      height: 6px;
      background-color: #fff;
      background-image: linear-gradient(
         45deg,
         rgba(0, 0, 0, 0.25) 25%,
         transparent 25%,
         transparent 50%,
         rgba(0, 0, 0, 0.25) 50%,
         rgba(0, 0, 0, 0.25) 75%,
         transparent 75%,
         transparent
      );
      background-size: 15px 15px;
      position: absolute;
      top: 0;
      left: 0;
      animation: ${animFw} 2s ease-in infinite;
   }
`

export const Loader = () => {
   const appStatus = useAppSelector(state => state.app.status)

   return (
      <LoaderWrapper>
         <LoaderStyle start={appStatus} />
      </LoaderWrapper>
   )
}
