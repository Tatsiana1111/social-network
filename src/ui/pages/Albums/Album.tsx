import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/bundle'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { getPhotosTC } from '../../../bll/albumsReducer'
import { NavLinkStyled } from '../../components/Navigation/Navigation'
import { PATH } from '../Pages'

const AlbumWrapper = styled.div`
   width: 80%;
   height: calc(100vh - 50px);
`

const MySliderItem = styled(SwiperSlide)`
   overflow: hidden;
   position: relative;
   padding-bottom: 58%;
   img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
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
            <MySliderItem key={slide.id}>
               <img src={slide.url} alt={slide.title} />
            </MySliderItem>
         )
      })
   }

   return (
      <AlbumWrapper>
         <NavLinkStyled to={PATH.albums}>Back to Albums</NavLinkStyled>
         <h2>Album: {albumId}</h2>
         <Swiper
            modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 1 }}
         >
            {showSlidesHandler()}
         </Swiper>
      </AlbumWrapper>
   )
}
