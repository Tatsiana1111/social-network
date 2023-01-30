import React from 'react'

import styled from 'styled-components'

const AlbumWrapper = styled.div`
   position: relative;
   span {
      position: absolute;
      bottom: 10px;
      left: 10px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 90%;
   }
`

type AlbumPropsTypes = {
   title: string
   cover: string
}
export const Album = (props: AlbumPropsTypes) => {
   return (
      <AlbumWrapper>
         <span>{props.title}</span>
         <img src={props.cover} alt="cover" />
      </AlbumWrapper>
   )
}
