import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { PATH } from '../Pages'

const AlbumWrapper = styled(NavLink)`
   cursor: pointer;
   position: relative;
   border-radius: 10px;
   overflow: hidden;
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
   id: number
   title: string
   cover: string
}
export const AlbumItem = (props: AlbumPropsTypes) => {
   return (
      <AlbumWrapper to={`${PATH.albums}/${props.id}`}>
         <span>{props.title}</span>
         <div>
            <img src={props.cover} alt="cover" />
         </div>
      </AlbumWrapper>
   )
}
