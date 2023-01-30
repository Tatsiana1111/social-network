import React, { useEffect } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getAlbumsTC } from '../../../bll/albumsReducer'
import { Box } from '../../components/Box/Box'
import { Loader } from '../../components/Loader/Loader'

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
   const dispatch = useAppDispatch()
   const albums = useAppSelector(state => state.albums.albums)
   const fetch = useAppSelector(state => state.albums.fetchAlbums)

   useEffect(() => {
      fetchAlbumsHandler()
   }, [])

   const fetchAlbumsHandler = () => {
      dispatch(getAlbumsTC())
   }
   const showAlbum = () => {
      return albums.map(album => {
         return <Album key={album.id} title={album.title} cover={'https://picsum.photos/200'} />
      })
   }

   return (
      <AlbumsWrapper>
         <h1>My Albums</h1>
         <Box>
            <InfiniteScroll
               className={'albumContentWrapper'}
               dataLength={albums.length}
               next={fetchAlbumsHandler}
               hasMore={fetch}
               loader={<Loader />}
            >
               {showAlbum()}
            </InfiniteScroll>
         </Box>
      </AlbumsWrapper>
   )
}
