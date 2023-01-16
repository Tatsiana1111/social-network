import styled from 'styled-components'

export const AvatarDiv = styled.div`
   img {
      width: 250px;
      height: 250px;
   }

   margin: 10px;
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: white;
   //width: 292px;
   //height: 292px;
   border-radius: 10px;
`
export const AboutProfileDiv = styled.div`
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   display: flex;
   flex-direction: column;
   background-color: white;
   //width: 572px;
   //height: 292px;
   border-radius: 10px;
   margin: 10px;

   #profileName {
      font-weight: bolder;
      font-size: 24px;
   }

   #status {
      font-size: 16px;
      font-style: italic;
   }

   #lookingForAJob {
      font-size: 20px;
      display: flex;
      margin: 0px 20px;
      align-items: center;
   }

   #aboutMeInfo {
      font-size: 16px;
   }

   span {
      margin: 10px 20px;
      border-radius: 10px;
      font-family: 'Roboto Light', sans-serif;
      font-size: 18px;
      background-color: white;
   }
`
export const PostDiv = styled.div`
   //position: relative;
   //top: 310px;
   //left: 255px;
   margin: 10px;
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-direction: column;
   background-color: white;
   //width: 572px;
   //height: 564px;
   border-radius: 10px;

   div {
      background-color: white;
      border-radius: 10px;
   }

   img {
      background-color: white;
   }

   textarea {
      margin: 20px;
      width: 400px;
   }

   span {
      margin: 20px;
      border-radius: 10px;
      font-family: 'Roboto Light', sans-serif;
      font-size: 24px;
      background-color: white;
   }
`
export const PostImage = styled.img`
   max-width: 525px;
   height: 351px;
`
export const BlockWithAvatar = styled.div`
   margin-left: 20px;
   display: flex;
   align-self: self-start;

   #smallAvatar {
      width: 55px;
      height: 55px;
      border-radius: 50%;
   }
`
export const BlockDiv = styled.div`
   display: flex;
   width: 100%;
`
export const WrapperDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   width: 100%;
   overflow: scroll;
   &::-webkit-scrollbar {
      display: none;
   }
`
