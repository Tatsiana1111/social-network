import React from 'react'

import camera from '../../../common/icons/camera.png'

import { WrapperDiv } from './styled'

export const CameraIcon: React.FC<any> = ({ children }) => {
   return (
      <WrapperDiv>
         <button className="userAvatar">
            <label htmlFor="input">
               <div className="children" id="input">
                  {children}
               </div>
               <div className="camera">
                  <img src={camera} className="cameraImg" alt="" />
               </div>
            </label>
         </button>
      </WrapperDiv>
   )
}
