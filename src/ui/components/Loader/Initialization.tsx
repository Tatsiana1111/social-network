import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from{
    background-position: 1em 0;
  }
  to {
    background-position: 0 0;
  }
`

const InitializationWrapper = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: center;
   overflow: auto;
   span {
      position: relative;
      width: 400px;
      height: 16px;
      display: inline-block;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 4px;
      background-image: linear-gradient(
         45deg,
         rgba(0, 0, 0, 0.25) 25%,
         transparent 25%,
         transparent 50%,
         rgba(0, 0, 0, 0.25) 50%,
         rgba(0, 0, 0, 0.25) 75%,
         transparent 75%,
         transparent
      );
      font-size: 30px;
      background-size: 1em 1em;
      box-sizing: border-box;
      animation: ${rotate} 1s linear infinite;
   }
`

export const Initialization = () => {
   return (
      <InitializationWrapper>
         <span></span>
      </InitializationWrapper>
   )
}
