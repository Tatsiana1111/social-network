import React, { HTMLAttributes } from 'react'

import { useAppDispatch } from '../../../../app/hooks'
import { setModalOpenAC } from '../../../../bll/appReducer'

import { EditButtonWrapper } from './style'

type PropsType = HTMLAttributes<HTMLDivElement> & {
   name: string
}
export const EditButton = (props: PropsType) => {
   const dispatch = useAppDispatch()
   const handleModalOpen = () => {
      dispatch(setModalOpenAC({ value: 'updateProfileModal' }))
   }

   return (
      <EditButtonWrapper>
         <div>
            <span onClick={handleModalOpen}>{props.name}</span>
         </div>
      </EditButtonWrapper>
   )
}

//  https://codepen.io/katarzynamarta/pen/rNdbbVq
