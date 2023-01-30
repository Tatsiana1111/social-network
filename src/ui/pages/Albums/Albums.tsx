import React from 'react'

import styled from 'styled-components'

import { Box } from '../../components/Box/Box'

import { Album } from './Album'

const AlbumsWrapper = styled.section`
   width: 100%;

   h1 {
      margin: 10px 0;
   }
   .albumContentWrapper {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 15px;
   }
`

export const Albums = () => {
   return (
      <AlbumsWrapper>
         <h1>My Albums</h1>
         <Box>
            <div className={'albumContentWrapper'}>
               <Album title={'red'} cover={'https://via.placeholder.com/150'} />
               <Album title={'red'} cover={'https://via.placeholder.com/150'} />
               <Album title={'red'} cover={'https://via.placeholder.com/150'} />
            </div>
         </Box>
      </AlbumsWrapper>
   )
}
