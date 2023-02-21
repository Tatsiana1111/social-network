import React from 'react'

import styled from 'styled-components'

import openToWork from '../../../common/icons/openToWork.png'

const LookingForAJobWrapper = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 2;
   width: 100%;
   height: 100%;
   padding: 20px;
   img {
      width: 100%;
      height: 100%;
   }
`

export const LookingForAJob = () => {
   return (
      <LookingForAJobWrapper>
         <img src={openToWork} alt="openToWork icon" />
      </LookingForAJobWrapper>
   )
}
