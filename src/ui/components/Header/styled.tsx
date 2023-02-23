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
      color: #3d82d9;
      background-color: inherit;
      font-family: 'Caveat', cursive;
      @media (max-width: ${props => props.theme.media.medium}px) {
         display: none;
      }
   }

   img {
      cursor: pointer;
      background-color: inherit;

      :hover {
         transform: scale(1.2);
      }
   }

   .headerBtns {
      display: flex;
      justify-content: space-between;

      background-color: inherit;

      button {
         cursor: pointer;
         border: none;
         font-size: 18px;
         padding: 5px 7px;
         background-color: inherit;
      }
   }
   @media (max-width: ${props => props.theme.media.small}px) {
      .headerBtns {
         display: none;
      }
   }
`
