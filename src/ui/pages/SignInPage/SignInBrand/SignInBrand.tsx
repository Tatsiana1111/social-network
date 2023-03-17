import React from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'

const Wrapper = styled.div`
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

export const SignInBrand = () => {
   return (
      <div>
         <Wrapper>
            <motion.div
               initial={{ y: -300, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8 }}
            >
               <h1>Lightels</h1>
            </motion.div>
            <motion.div
               initial={{ x: -300, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.5 }}
            >
               <p>Social Network</p>
            </motion.div>
         </Wrapper>
      </div>
   )
}
