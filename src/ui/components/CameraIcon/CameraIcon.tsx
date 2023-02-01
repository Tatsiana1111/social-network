import React, { ChangeEvent } from 'react'

import styled from 'styled-components'

import { useAppDispatch } from '../../../app/hooks'
import { updatePhoto } from '../../../bll/profileReducer'
import camera from '../../../common/icons/camera.png'

const CameraIconWrapper = styled.div`
   position: absolute;
   bottom: 30px;
   right: 30px;
   height: 50px;
   width: 50px;

   label {
      cursor: pointer;
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;

      input {
         position: absolute;
         left: 0;
         opacity: 0;
         top: 0;
         bottom: 0;
         width: 100%;
      }
      img {
         position: absolute;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
      }
   }
`

export const CameraIcon = () => {
   const dispatch = useAppDispatch()

   const updatePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length) {
         const file = e.target.files[0]

         dispatch(updatePhoto(file))
      }
   }

   return (
      <CameraIconWrapper>
         <label htmlFor="inputTag">
            <input id="inputTag" type="file" onChange={updatePhotoHandler} />
            <img src={camera} alt="cameraIcon" />
         </label>
      </CameraIconWrapper>
   )
}
