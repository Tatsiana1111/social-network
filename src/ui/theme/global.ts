import styled, { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
 * {
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  //border: 1px solid red;
 }
 body {
  background-color: ${props => props.theme.colors.backGroundColor};

  ::-webkit-scrollbar {
   width: 15px;
   height: 8px;
   background-color:#E5E5E5;
  }

  ::-webkit-scrollbar-thumb {
   background-color: #843465;
   border-radius: 9em;
   box-shadow: inset 1px 1px 10px #f3faf7;
  }

  ::-webkit-scrollbar-thumb:hover {
   background-color: #253861;
  }

  //::-webkit-scrollbar-button:vertical:start:decrement {
  // background-color: #f6f8f4;
  //}
  //::-webkit-scrollbar-button:vertical:end:increment {
  // background-color: #f6f8f4;
  //}
  //::-webkit-scrollbar-button:horizontal:start:decrement {
  // background-color: #f6f8f4;
  //}
  //::-webkit-scrollbar-button:horizontal:end:increment {
  //background-color: #f6f8f4;
  //}
 }
 body.modalIsOpen {
   overflow: hidden;
 }
`
export const Container = styled.div`
   margin: 0 auto;
   padding: 0 15px;
   max-width: 1200px;
   background-color: inherit;
   color: ${props => props.theme.colors.primary};
`
