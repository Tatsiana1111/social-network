import React from 'react'

import styled from 'styled-components'

import { Navigation } from '../Navigation/Navigation'

export const SidebarWrapper = styled.aside`
   position: sticky;
   top: 15px;
   max-width: 100%;
   min-width: fit-content;

   height: 100%;

   @media (max-width: ${props => props.theme.media.large}px) {
      display: none;
   }
`

export const Sidebar = () => {
   return (
      <SidebarWrapper>
         <Navigation />
      </SidebarWrapper>
   )
}
