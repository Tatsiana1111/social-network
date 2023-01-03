import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'

export const PATH = {
  home: '/',
}

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={PATH.home} element={<Home />} />
      </Routes>
    </div>
  )
}
