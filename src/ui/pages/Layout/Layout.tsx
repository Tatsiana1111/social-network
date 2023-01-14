import React from 'react'

import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../styles/global'

export const Layout = () => {
   return (
      <Container>
         <Sidebar />
         <Outlet />
      </Container>
   )
}
