import React, { forwardRef, InputHTMLAttributes, LegacyRef } from 'react'

import styled from 'styled-components'

const Label = styled.label`
   display: flex;
   cursor: pointer;
   font-weight: 500;
   position: relative;
   overflow: hidden;

   input {
      position: absolute;
      left: -9999px;
      &:checked + span {
         background-color: cyan;
         &:before {
            box-shadow: inset 0 0 0 0.4375em #42b72a;
         }
      }
   }
   span {
      display: flex;
      align-items: center;
      padding: 0.375em 0.75em 0.375em 0.375em;
      border-radius: 99em; // or something higher...
      transition: 0.25s ease;
      border: 1px solid rgba(0, 0, 0, 0.2);
      &:hover {
         background-color: rosybrown;
      }
      &:before {
         display: flex;
         flex-shrink: 0;
         content: '';
         background-color: #fff;
         width: 1.5em;
         height: 1.5em;
         border-radius: 50%;
         margin-right: 0.375em;
         transition: 0.25s ease;
         box-shadow: inset 0 0 0 0.125em #00005c;
      }
   }
`

export const RadioInput = forwardRef(
   (props: InputHTMLAttributes<HTMLInputElement>, ref: LegacyRef<HTMLInputElement>) => {
      return (
         <Label>
            <input type="radio" {...props} ref={ref} />
            <span>{props.value}</span>
         </Label>
      )
   }
)
