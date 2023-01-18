import styled from 'styled-components'

import { Box } from '../../components/Box/Box'

export const UserWrapper = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;

   :hover {
      transform: scale(1.01);
   }

   img {
      max-width: 250px;
      min-width: 200px;
   }

   div {
      display: flex;
      gap: 10px;

      button {
         cursor: pointer;
         padding: 7px 13px;
         color: white;
         font-weight: bold;
         text-transform: capitalize;
         background-color: #447bba;
         border: none;
         border-radius: 10px;
      }

      button:hover {
         opacity: 0.88;
      }

      button:disabled {
         background-color: #f0f2f5;
         color: black;
         opacity: 0.6;
      }
   }
`
