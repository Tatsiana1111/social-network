import styled from 'styled-components'

export const SHeader = styled.header`
  background-color: burlywood;
`
export const SHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  background-color: inherit;
  h1 {
    color: red;
    background-color: inherit;
    font-family: 'Caveat', cursive;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 200px;
    background-color: inherit;
    button {
      cursor: pointer;
      border: none;
      font-size: 18px;
      padding: 5px 7px;
      border-radius: 10px;
    }
  }
`
