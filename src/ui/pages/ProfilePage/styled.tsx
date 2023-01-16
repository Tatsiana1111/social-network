import styled from 'styled-components'

// export const AvatarDiv = styled.div`
//    img {
//       width: 250px;
//       height: 250px;
//    }
//
//    margin: 10px;
//    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    background-color: white;
//    //width: 292px;
//    //height: 292px;
//    border-radius: 10px;
// `
// export const AboutProfileDiv = styled.div`
//    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
//    display: flex;
//    flex-direction: column;
//    background-color: white;
//    //width: 572px;
//    //height: 292px;
//    border-radius: 10px;
//    margin: 10px;
//
//    #profileName {
//       font-weight: bolder;
//       font-size: 24px;
//    }
//
//    span {
//       margin: 20px;
//       border-radius: 10px;
//       font-family: 'Roboto Light', sans-serif;
//       font-size: 18px;
//       background-color: white;
//    }
// `
// export const PostDiv = styled.div`
//    //position: relative;
//    //top: 310px;
//    //left: 255px;
//    margin: 10px;
//    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
//    display: flex;
//    align-items: center;
//    justify-content: space-around;
//    flex-direction: column;
//    background-color: white;
//    //width: 572px;
//    //height: 564px;
//    border-radius: 10px;
//
//    div {
//       background-color: white;
//       border-radius: 10px;
//    }
//
//    img {
//       background-color: white;
//    }
//
//    textarea {
//       margin: 20px;
//       width: 400px;
//    }
//
//    span {
//       margin: 20px;
//       border-radius: 10px;
//       font-family: 'Roboto Light', sans-serif;
//       font-size: 24px;
//       background-color: white;
//    }
// `
// export const PostImage = styled.img`
//    max-width: 525px;
//    height: 351px;
// `
// export const BlockWithAvatar = styled.div`
//    margin-left: 20px;
//    display: flex;
//    align-self: self-start;
//
//    #smallAvatar {
//       width: 55px;
//       height: 55px;
//       border-radius: 50%;
//    }
// `
// export const BlockDiv = styled.div`
//    display: flex;
//    width: 100%;
// `

export const WrapperDiv = styled.div`
   display: grid;
   grid-template-columns: 1fr 2fr;
   grid-template-rows: repeat(2, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 20px;
   .profilePhoto {
      grid-area: 1 / 1 / 2 / 2;
   }
   .profileData {
      grid-area: 1 / 2 / 2 / 3;
   }
   .profilePosts {
      grid-area: 2 / 2 / 3 / 3;
   }
`
export const PostWrapper = styled.div`
   display: flex;
   flex-direction: column;
   min-width: 100%;

   .PostHeader {
      display: flex;
      gap: 10px;
      align-items: center;
   }

   .comment {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      textarea {
         resize: none;
         padding: 10px;
         border-radius: 10px;
         border: 1px solid red;
         background-color: ${props => props.theme.colors.backGroundColor};
         color: ${props => props.theme.colors.primary};
      }
   }
`
