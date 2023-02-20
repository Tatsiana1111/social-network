import styled from 'styled-components'

export const SSignInWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 8rem;
   @media (max-width: ${props => props.theme.media.small}px) {
      flex-direction: column;
      gap: 10px;
      text-align: center;
      padding-top: 2rem;
   }
`
export const SSignInLeft = styled.div`
   h1 {
      font-family: Signika sans-serif;
      font-size: 64px;
      font-weight: 400;
      color: ${props => props.theme.colors.secondary};
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
   width: 360px;
   min-width: 300px;
   background-color: white;
   box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   form {
      display: flex;
      flex-direction: column;
      width: 100%;
   }
`
