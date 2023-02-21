import React from 'react'

import styled from 'styled-components'

const ProfileDataWrapper = styled.div``

export const ProfileData = (props: { open: () => void }) => {
   const handleModalOpen = () => {
      props.open()
   }

   return (
      <ProfileDataWrapper>
         <button onClick={handleModalOpen}>modify</button>
      </ProfileDataWrapper>
   )
}
