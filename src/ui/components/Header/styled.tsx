import styled from 'styled-components'

export const SHeader = styled.header`
   background-color: ${props => props.theme.colors.backGroundColor}; ;
`
export const SHeaderInner = styled.div`
   display: flex;
   align-items: center;

   justify-content: space-between;
   padding: 20px 0;
   background-color: ${props => props.theme.colors.backGroundColor};
   h1 {
      color: #1f3c60ff;
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
