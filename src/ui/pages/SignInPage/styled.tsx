import styled from 'styled-components'

export const SSignInWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8rem;
`
export const SSignInLeft = styled.div`
  h1 {
    font-family: Signika sans-serif;
    font-size: 64px;
    font-weight: 400;
    color: #1f3c60;
  }
  p {
    font-weight: 400;
    font-size: 48px;
  }
`
export const SSignInRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: white;
  form {
    display: flex;
    flex-direction: column;
    button {
      cursor: pointer;
      background-color: #1877f2;
      color: white;
      padding: 12px 0;
      width: 100%;
      border-radius: 10px;
      border: none;
    }
  }
  button {
    cursor: pointer;
    background-color: #42b72a;
    color: white;
    padding: 13px 10px;
    border-radius: 10px;
    border: none;
  }
`
