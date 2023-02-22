import React from 'react'

import styled from 'styled-components'

const ContactWrapper = styled.div`
   position: relative;
   width: 30px;
   height: 30px;
   cursor: pointer;
   margin-bottom: 5px;
   opacity: 0.5;
   img {
      width: 100%;
      height: auto;
   }

   a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
   }
   :hover {
      opacity: 1;
   }
   @media (max-width: ${props => props.theme.media.medium}px) {
      opacity: 1;
   }
`

export const Contact = (props: { to: string; img: string }) => {
   return (
      <ContactWrapper>
         <img src={props.img} alt={props.img} />
         <a target="_blank" href={props.to} rel="noreferrer"></a>
      </ContactWrapper>
   )
}
