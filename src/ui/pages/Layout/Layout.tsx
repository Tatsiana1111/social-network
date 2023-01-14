import React from 'react'

import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../styles/global'

const ContentWrapper = styled.div`
   display: flex;
   gap: 20px;
`

export const Layout = () => {
   return (
      <Container>
         <ContentWrapper>
            <Sidebar />
            <Outlet />
         </ContentWrapper>
      </Container>
   )
}
