import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
   display: flex;
   gap: 10px;

   span {
      opacity: 0.7;
   }

   p {
      font-weight: bold;
   }
`

export const ProfileDataItem = (props: { name: string; content: string }) => {
   return (
      <Wrapper>
         <span>{props.name}</span>
         <p>{props.content}</p>
      </Wrapper>
   )
}
