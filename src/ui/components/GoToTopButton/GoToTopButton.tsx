import React, { useEffect, useState } from 'react'

import styled, { keyframes } from 'styled-components'

// https://www.youtube.com/watch?v=Xz2Z8xKH-R0  logics

// https://codepen.io/JakubHonisek/pen/qjpeeO   styles

const move = keyframes`
   from {
      opacity: 1;
   }
   33.3% {
      opacity: 1;
      transform: translateY(-10px);
   }
   66.6% {
      opacity: 1;
      transform: translateY(-30px);
   }
   to {
      opacity: 0;
      transform: translateY(-50px) scale(0.5);
   }
`
const GoToTopWrapper = styled.div`
   display: inline-block;
   justify-content: flex-start;
   align-items: center;
   position: sticky;
   bottom: 10px;
   right: 50px;

   height: 80px;

   div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 80px;

      .chevron {
         position: absolute;
         width: 50px;
         height: 10px;
         opacity: 0;
         transform: scale(0.3);
         animation: ${move} 3s ease-out infinite;
      }

      .chevron:first-child {
         animation: ${move} 3s ease-out 1s infinite;
      }

      .chevron:nth-child(2) {
         animation: ${move} 3s ease-out 2s infinite;
      }

      .chevron:before,
      .chevron:after {
         content: '';
         position: absolute;
         top: 0;
         height: 100%;
         width: 50%;
         //background: #2c3e50;
         background: #447bba;
      }

      .chevron:before {
         left: 0;
         transform: skewY(130deg);
      }

      .chevron:after {
         right: 0;
         width: 50%;
         transform: skewY(-130deg);
      }
   }
`

export const GoToTopButton = () => {
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      window.addEventListener('scroll', toggleVisibility)

      return () => {
         window.removeEventListener('scroll', toggleVisibility)
      }
   }, [])
   const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
         setIsVisible(true)
      } else {
         setIsVisible(false)
      }
   }
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   return (
      <GoToTopWrapper
         onClick={scrollToTop}
         style={isVisible ? { display: 'inline-block' } : { display: 'none' }}
      >
         <div>
            <div className={'chevron'} />
            <div className={'chevron'} />
            <div className={'chevron'} />
         </div>
      </GoToTopWrapper>
   )
}
