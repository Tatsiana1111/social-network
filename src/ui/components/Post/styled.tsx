import styled from 'styled-components'

import { Box } from '../Box/Box'

export const PostWrapper = styled(Box)`
   margin-bottom: 15px;

   img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
   }

   .PostHeader {
      display: flex;
      gap: 10px;
      align-items: center;
   }

   p {
      margin: 10px 0;
   }
`
