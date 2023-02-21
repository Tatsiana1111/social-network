import React, { useState } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
   input {
      display: none;

      & + label {
         &::selection {
            background: none;
         }
      }
   }

   label {
      outline: 0;
      display: block;
      width: 4em;
      height: 2em;
      position: relative;
      cursor: pointer;
      user-select: none;

      &:after,
      &:before {
         position: relative;
         display: block;
         content: '';
         width: 50%;
         height: 100%;
      }

      &:after {
         left: 0;
      }

      &:before {
         display: none;
      }
   }

   &:checked + label:after {
      left: 50%;
   }

   input {
      + label {
         padding: 2px;
         transition: all 0.2s ease;
         font-family: sans-serif;
         perspective: 100px;

         &:after,
         &:before {
            display: inline-block;
            transition: all 0.4s ease;
            width: 100%;
            text-align: center;
            position: absolute;
            line-height: 2em;
            font-weight: bold;
            color: #fff;
            top: 0;
            left: 0;
            backface-visibility: hidden;
            border-radius: 4px;
         }

         &:after {
            content: 'Yeah !!!';
            background: #02c66f;
            transform: rotateY(-180deg);
         }

         &:before {
            background: #ff3a19;
            content: 'Nope!';
         }

         &:active:before {
            transform: rotateY(-20deg);
         }
      }

      &:checked + label {
         &:before {
            transform: rotateY(180deg);
         }

         &:after {
            transform: rotateY(0);
            left: 0;
            background: #0ca25f;
         }

         &:active:after {
            transform: rotateY(20deg);
         }
      }
   }
`

export const LookingForAJobSwitcher = () => {
   const [checked, setChecked] = useState(false)

   const onClickHandler = () => {
      setChecked(!checked)
   }

   return (
      <Wrapper>
         <input checked={checked} id={'cb5'} type="checkbox" />
         <label htmlFor="cb5" onClick={onClickHandler}></label>
      </Wrapper>
   )
}
