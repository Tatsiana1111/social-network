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
     overflow: scroll;
     &::-webkit-scrollbar {
      display: none;
     }
    }
 `
export const Container = styled.div`
   margin: 0 auto;
   padding: 0 10px;
   max-width: 1200px;
   background-color: inherit;
`
