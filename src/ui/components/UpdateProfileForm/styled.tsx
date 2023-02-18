import styled from 'styled-components'

export const UpdateProfileWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 20px;

   .name {
      grid-area: 1 / 1 / 2 / 2;
      font-size: 25px;
      font-weight: bold;
   }

   .aboutMe {
      grid-area: 2 / 1 / 3 / 2;
      font-size: 20px;
   }

   .skills {
      grid-area: 3 / 1 / 4 / 2;
      font-size: 20px;
   }

   .button {
      justify-self: end;
      grid-area: 1 / 2 / 2 / 3;
      width: 20px;
      height: 20px;
      cursor: pointer;
      position: absolute;
      background-color: transparent;
      border: none;
      z-index: 1;
   }

   img {
      justify-self: end;
      grid-area: 1 / 2 / 2 / 3;
      cursor: pointer;
      width: 35px;
      height: 35px;
      position: relative;
   }
`
