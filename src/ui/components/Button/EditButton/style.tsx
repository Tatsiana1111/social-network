import styled from 'styled-components'

export const EditButtonWrapper = styled.div`
   cursor: pointer;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;

   width: 200px;
   z-index: 2;

   div {
      position: relative;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 250px;
      height: 50px;
      margin: 0;
   }
   div span {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;

      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;
      padding: 10px;

      font-weight: 400;
      color: #fff;
      text-decoration: none;
      letter-spacing: 1px;

      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(15px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);

      transition: 0.5s;
   }
   div:hover span {
      letter-spacing: 3px;
   }
   div span::before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      transform: skewX(45deg) translate(0);

      width: 50%;
      height: 100%;

      background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
      filter: blur(0px);

      transition: 0.5s;
   }
   div:hover span::before {
      transform: skewX(45deg) translate(200px);
   }
   div::before {
      content: '';

      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translatex(-50%);

      width: 30px;
      height: 10px;

      background: #f00;
      border-radius: 10px;

      transition: 0.5s;
      transition-delay: 0.5s;
   }
   div:hover::before {
      bottom: 0;

      width: 80%;
      height: 50%;

      border-radius: 30px;
   }

   div::after {
      content: '';

      position: absolute;
      top: -5px;
      left: 50%;
      transform: translatex(-50%);

      width: 30px;
      height: 10px;

      background: #f00;
      border-radius: 10px;

      transition: 0.5s;
      transition-delay: 0.5s;
   }
   div:hover::after {
      top: 0;

      width: 80%;
      height: 50%;

      border-radius: 30px;
   }
   div::before,
   div::after {
      background: #2db2ff;
      box-shadow: 0 0 5px #2db2ff, 0 0 15px #2db2ff, 0 0 30px #2db2ff, 0 0 60px #2db2ff;
   }
`
