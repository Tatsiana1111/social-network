import styled from 'styled-components'

export const CommentWrapper = styled.div`
   display: flex;
   flex-direction: row;

   img {
      margin: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
   }

   div {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
   }
`
export const CommentText = styled.span`
   margin: 10px 0;
   font-size: 14px;
   font-style: italic;
`
export const CommentEmail = styled.span`
   font-size: 16px;
   font-weight: bold;
`
