import React from 'react'

import styled from 'styled-components'

import { useAppSelector } from '../../../app/hooks'
import falseIcon from '../../../common/images/falseIcon.png'
import trueIcon from '../../../common/images/trueIcon.png'

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   width: 100%;
   height: 50px;

   span {
      opacity: 0.7;
   }

   img {
      width: auto;
      height: 100%;
   }
`

export const LookingForAJobFlag = () => {
   const lookingForAJob = useAppSelector(state => state.profile.data.lookingForAJob)

   return (
      <Wrapper>
         <span>lookingForAJob:</span>
         {lookingForAJob ? (
            <img src={trueIcon} alt="trueIcon" />
         ) : (
            <img src={falseIcon} alt="falseIcon" />
         )}
      </Wrapper>
   )
}
