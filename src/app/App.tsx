import React, { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { MeTC } from '../bll/authReducer'
import { Header } from '../ui/components/Header/Header'
import { NavigationForUs } from '../ui/components/NavigationForUs/NavigationForUs'
import { Pages } from '../ui/pages/Pages'
import { GlobalStyle } from '../ui/styles/global'
import { LightTheme } from '../ui/styles/Themes/LightTheme'

import { useAppDispatch } from './hooks'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(MeTC())
  }, [])

  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <NavigationForUs />
        <GlobalStyle />
        <Header />
        <Pages />
      </ThemeProvider>
    </>
  )
}
