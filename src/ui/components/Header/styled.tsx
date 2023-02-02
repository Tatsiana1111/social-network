import styled from 'styled-components'

export const SHeader = styled.header`
   background-color: white;
`
export const SHeaderInner = styled.div`
   display: flex;
   align-items: center;

   justify-content: space-between;
   padding: 20px 0;
   background-color: inherit;
   h1 {
      color: rgb(31, 60, 96);
      background-color: inherit;
      font-family: 'Caveat', cursive;
   }
   img {
      cursor: pointer;
      background-color: inherit;
      :hover {
         transform: scale(1.2);
      }
   }
   div {
      display: flex;
      justify-content: space-between;
      width: 200px;
      background-color: inherit;

      button {
         cursor: pointer;
         border: none;
         font-size: 18px;
         padding: 5px 7px;
         background-color: inherit;
      }
   }
`
