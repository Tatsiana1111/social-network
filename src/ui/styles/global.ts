import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        //border: 1px solid red;
    }
    body {
     background-color: #E5E5E5;
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
