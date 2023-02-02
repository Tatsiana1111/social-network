import React, { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { initializeAppTC } from '../bll/appReducer'
import { Header } from '../ui/components/Header/Header'
import { Initialization } from '../ui/components/Loader/Initialization'
import { Loader } from '../ui/components/Loader/Loader'
import { NavigationForUs } from '../ui/components/NavigationForUs/NavigationForUs'
import { Pages } from '../ui/pages/Pages'
import { GlobalStyle } from '../ui/theme/global'
import { darkTheme, lightTheme } from '../ui/theme/theme'

import { useAppDispatch, useAppSelector } from './hooks'

export const App = () => {
   const isInitialized = useAppSelector(state => state.app.isInitialized)
   const theme = useAppSelector(state => state.app.theme)

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(initializeAppTC())
   }, [])

   if (!isInitialized) {
      return <Initialization />
   }

   return (
      <>
         <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <NavigationForUs />
            <GlobalStyle />
            <Header />
            <Loader />
            <Pages />
         </ThemeProvider>
      </>
   )
}
