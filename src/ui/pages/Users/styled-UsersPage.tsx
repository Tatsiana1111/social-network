import styled from 'styled-components'

export const UsersPageWrapper = styled.section`
   width: 100%;

   h1 {
      margin: 10px 0;
   }

   .usersWrapper {
      display: grid;
      grid-template-columns: 9fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 10px;
   }

   .users {
      grid-area: 1 / 1 / 2 / 2;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
   }
`
