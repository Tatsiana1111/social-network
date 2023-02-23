import React, { InputHTMLAttributes } from 'react'

import styled from 'styled-components'

const ContactInputWrapper = styled.span`
   display: flex;
   align-items: center;
   gap: 5px;
   height: 40px;
   width: 100%;

   span {
      width: 30px;
      height: 30px;

      img {
         width: 100%;
         height: auto;
      }
   }

   input {
      border-radius: 20px;
      border: none;
      width: 100%;
      height: 80%;
      font-weight: bold;
      padding: 5px 10px;
      background-color: ${props => props.theme.input.bg};
      color: ${props => props.theme.input.text};
   }

   input::placeholder {
      color: ${props => props.theme.input.placeholder};
      text-align: center;
   }
   input:focus {
      border: 2px solid ${props => props.theme.input.focus};
   }
`

type ContactInputType = {
   img?: string
   inputProps: InputHTMLAttributes<HTMLInputElement>
}
export const ContactInput = (props: ContactInputType) => {
   return (
      <ContactInputWrapper>
         {props.img && (
            <span>
               <img src={props.img} alt={props.img} />
            </span>
         )}
         <input type="url" {...props.inputProps} placeholder={props.inputProps.name?.slice(9)} />
      </ContactInputWrapper>
   )
}
