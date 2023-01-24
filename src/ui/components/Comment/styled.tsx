import styled from 'styled-components'

export const PostDiv = styled.div`
   display: flex;
   flex-direction: row;

   img {
      margin: 10px 10px;
      width: 40px;
      height: 40px;
   }

   div {
      margin: 10px 0px;
      display: flex;
      flex-direction: column;
   }
`
export const CommentText = styled.span`
   margin: 10px 0px;
   font-size: 14px;
   font-style: italic;
`
export const CommentEmail = styled.span`
   font-size: 16px;
   font-weight: bold;
`
