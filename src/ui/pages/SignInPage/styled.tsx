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
