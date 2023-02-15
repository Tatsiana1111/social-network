import React, { useState } from 'react'

import styled from 'styled-components'

const BurgerWrapper = styled.div`
   @media (max-width: 768px) {
      display: none;
   }
   div {
      width: 60px;
      height: 45px;
      position: relative;
      transition: 0.5s ease-in-out;
      cursor: pointer;
   }
   div span {
      display: block;
      position: absolute;
      height: 9px;
      width: 50%;
      background: #d3531a;
      opacity: 1;

      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
   }

   div span:nth-child(even) {
      left: 50%;
      border-radius: 0 9px 9px 0;
   }

   div span:nth-child(odd) {
      left: 0;
      border-radius: 9px 0 0 9px;
   }

   div span:nth-child(1),
   div span:nth-child(2) {
      top: 0;
   }

   div span:nth-child(3),
   div span:nth-child(4) {
      top: 18px;
   }

   div span:nth-child(5),
   div span:nth-child(6) {
      top: 36px;
   }

   div.open span:nth-child(1),
   div.open span:nth-child(6) {
      transform: rotate(45deg);
   }

   div.open span:nth-child(2),
   div.open span:nth-child(5) {
      transform: rotate(-45deg);
   }

   div.open span:nth-child(1) {
      left: 5px;
      top: 7px;
   }

   div.open span:nth-child(2) {
      left: calc(50% - 5px);
      top: 7px;
   }

   div.open span:nth-child(3) {
      left: -50%;
      opacity: 0;
   }

   div.open span:nth-child(4) {
      left: 100%;
      opacity: 0;
   }

   div.open span:nth-child(5) {
      left: 5px;
      top: 29px;
   }

   div.open span:nth-child(6) {
      left: calc(50% - 5px);
      top: 29px;
   }
`

export const Burger = () => {
   const [open, setOpen] = useState(false)
   const onClickHandler = () => {
      setOpen(!open)
   }

   return (
      <BurgerWrapper onClick={onClickHandler}>
         <div className={`${open ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </BurgerWrapper>
   )
}
// https://codepen.io/designcouch/pen/ExvwPY
