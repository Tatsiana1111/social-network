import styled from 'styled-components'
export const ProgressBar = styled.div``
export const CloseModalIcon = styled.span`
   position: absolute;
   top: 10px;
   right: 10px;
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
      width: 24px;
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
