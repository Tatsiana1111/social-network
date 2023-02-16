import React from 'react'

import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { BurgerMenu } from '../../components/Burger/BurgerMenu'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../theme/global'

const ContentWrapper = styled.div`
   display: flex;
   gap: 20px;
`

export const Layout = () => {
   return (
      <Container>
         <ContentWrapper>
            <BurgerMenu />
            <Sidebar />
            <Outlet />
         </ContentWrapper>
      </Container>
   )
}
