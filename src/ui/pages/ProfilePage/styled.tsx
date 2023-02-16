import styled from 'styled-components'

export const WrapperDiv = styled.div`
   display: grid;
   grid-template-columns: 1fr 2fr;
   grid-template-rows: 1fr auto;
   grid-column-gap: 20px;
   grid-row-gap: 20px;
   margin-bottom: 20px;

   .userAvatar {
      width: 300px;
      height: 300px;
   }

   .profilePhoto {
      grid-area: 1 / 1 / 2 / 2;
   }

   .profileData {
      grid-area: 1 / 2 / 2 / 3;
   }

   .profilePosts {
      grid-area: 2 / 2 / 3 / 3;
      display: flex;
      flex-direction: column;
      gap: 15px;
   }

   .profileButtonAddPost {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: 2 / 1 / 3 / 2;
      max-height: 50px;
      cursor: pointer;
      font-size: 20px;

      .input {
         opacity: 0;
      }

      .icon {
         z-index: 100;
      }
   }
   @media (max-width: ${props => props.theme.media.medium}px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
         'Photo'
         'Data'
         'AddPost'
         'Posts';
      .profilePosts {
         grid-area: Posts;
      }
      .profileButtonAddPost {
         grid-area: AddPost;
      }
      .profileData {
         grid-area: Data;
      }
      .profilePhoto {
         grid-area: Photo;
         justify-self: center;
      }
   }
`
// https://css-tricks.com/snippets/css/complete-guide-grid/
