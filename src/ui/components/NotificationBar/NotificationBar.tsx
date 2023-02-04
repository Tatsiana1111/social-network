import React from 'react'

import styled from 'styled-components'

const NotificationBarWrapper = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   max-width: 300px;
   height: 100px;
   background-color: forestgreen;
   border-radius: 20px;
`

type PropsType = {
   text: string
}
export const NotificationBar = (props: PropsType) => {
   return (
      <NotificationBarWrapper>
         <div>
            <h2>{props.text}</h2>
            <span></span>
         </div>
      </NotificationBarWrapper>
   )
}
