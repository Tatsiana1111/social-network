import styled from 'styled-components'

export const PostWrapper = styled.div`
   display: flex;
   flex-direction: column;
   min-width: 100%;

   img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
   }

   .PostHeader {
      display: flex;
      gap: 10px;
      align-items: center;
   }

   p {
      margin: 10px 0;
   }

   .comment {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 10px;

      .sendIcon {
         max-width: 30px;
         max-height: 30px;
         padding: 3px;
      }

      .sendIcon:hover {
         transform: scale(1.1);
      }

      form {
         width: 100%;
         min-width: 100px;
      }

      textarea {
         width: 100%;
         min-width: 100px;

         resize: none;
         padding: 10px;
         border-radius: 10px;
         border: 1px solid skyblue;
         background-color: ${props => props.theme.colors.backGroundColor};
         color: ${props => props.theme.colors.primary};
      }
   }
`

export const WrapperDiv = styled.div`
   display: flex;
   flex-direction: row;

   button {
      cursor: pointer;
      background-color: transparent;
      border: none;
   }
`
