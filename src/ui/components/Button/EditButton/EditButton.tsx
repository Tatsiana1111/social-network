import React, { HTMLAttributes } from 'react'

import { EditButtonWrapper } from './style'

type PropsType = HTMLAttributes<HTMLDivElement> & {
   onClick: () => void
   name: string
}
export const EditButton = (props: PropsType) => {
   const handleClick = () => {
      props.onClick()
   }

   return (
      <EditButtonWrapper onClick={handleClick}>
         <div>
            <span>{props.name}</span>
         </div>
      </EditButtonWrapper>
   )
}

//  https://codepen.io/katarzynamarta/pen/rNdbbVq
