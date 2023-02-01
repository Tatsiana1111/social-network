import React, { ChangeEvent } from 'react'

import styled from 'styled-components'

import { useAppDispatch } from '../../../app/hooks'
import { updatePhoto } from '../../../bll/profileReducer'
import camera from '../../../common/icons/camera.png'

const CameraIconWrapper = styled.div`
   cursor: pointer;
   position: absolute;
   bottom: 30px;
   right: 30px;

   div {
      position: relative;
      height: 50px;
      width: 50px;
      z-index: 4;

      input {
         position: absolute;
         left: 0;
         opacity: 0;
         top: 0;
         bottom: 0;
         width: 100%;
         z-index: 2;
      }
      img {
         position: absolute;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         z-index: 3;
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
      <CameraIconWrapper onClick={() => updatePhotoHandler}>
         <div>
            <input type="file" onChange={updatePhotoHandler} />
            <img src={camera} alt="cameraIcon" />
         </div>
      </CameraIconWrapper>
   )
}
