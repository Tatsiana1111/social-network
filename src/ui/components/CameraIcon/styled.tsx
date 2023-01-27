import styled from 'styled-components'

export const WrapperDiv = styled.div`
   position: absolute;
   top: 260px;
   left: 260px;

   .userAvatar {
      border: none;
      background-color: transparent;
   }

   .camera {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #1f3c60;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: relative;
      z-index: 1;
   }

   .cameraImg {
      width: 40px;
      height: 40px;
   }

   .children {
      top: 15px;
      position: absolute;
      z-index: 2;
      opacity: 0;
   }
`
