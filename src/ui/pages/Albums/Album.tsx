import React from 'react'

import styled from 'styled-components'

const AlbumWrapper = styled.div`
   cursor: pointer;
   position: relative;
   span {
      position: absolute;
      bottom: 10px;
      left: 10px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 90%;
      color: white;
      z-index: 2;
   }
   div {
      width: 300px;
      height: 250px;
      overflow: hidden;
   }
   img {
      width: 100%;
      height: 100%;
   }
   img:hover {
      transform: scale(1.02);
      transition: 0.2s;
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
         <div>
            <img src={props.cover} alt="cover" />
         </div>
      </AlbumWrapper>
   )
}
