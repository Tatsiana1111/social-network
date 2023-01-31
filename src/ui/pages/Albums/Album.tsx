import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/bundle'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getPhotosTC } from '../../../bll/albumsReducer'
import { NavLinkStyled } from '../../components/Sidebar/Sidebar'
import { PATH } from '../Pages'

const AlbumWrapper = styled.div`
   width: 73%;
`

export const Album = () => {
   const dispatch = useAppDispatch()
   const { albumId } = useParams()
   const photos = useAppSelector(state => state.albums.photos)

   useEffect(() => {
      if (albumId) {
         dispatch(getPhotosTC(+albumId))
      }
   }, [])

   const showSlidesHandler = () => {
      return photos.map(slide => {
         return (
            <SwiperSlide key={slide.id}>
               <img src={slide.url} alt={slide.title} />
            </SwiperSlide>
         )
      })
   }

   return (
      <AlbumWrapper>
         <NavLinkStyled to={PATH.albums}>---Back to Albums</NavLinkStyled>
         <h2>Album: {albumId}</h2>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
         >
            {showSlidesHandler()}
         </Swiper>
      </AlbumWrapper>
   )
}
