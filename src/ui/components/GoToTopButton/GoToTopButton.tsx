import React, { useEffect, useState } from 'react'

import styled, { keyframes } from 'styled-components'

const arrows = keyframes`
   //from {
   //   border-left:80px solid rgba(0,0,0,0);
   //   border-bottom:80px solid rgba(0,0,0,0);
   //   transform:translate(80px,80px)rotate(-45deg) ;
   //}
   //10%, 90% {
   //   border-left:80px solid rgba(0,0,0,0);
   //   border-bottom:80px solid rgba(0,0,0,0);
   //}
   //50% {
   //   border-left:80px solid rgba(0,0,0,0.7);
   //   border-bottom:80px solid rgba(0,0,0,0.7);
   //   transform:translate(80px,0px)rotate(-45deg) ;
   //}
   //to {
   //   border-left:80px solid rgba(0,0,0,0);
   //   border-bottom:80px solid rgba(0,0,0,0);
   //   transform:translate(80px,80px)rotate(-45deg) ;
   //}
`
const GoToTopWrapper = styled.div`
   display: inline-block;
   position: sticky;
   bottom: 40px;
   right: 50px;

   background-color: coral;
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
      if (window.pageYOffset > 500) {
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
         style={isVisible ? { display: 'block' } : { display: 'none' }}
      >
         to top
      </GoToTopWrapper>
   )
}
