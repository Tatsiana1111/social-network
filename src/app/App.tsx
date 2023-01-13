import React, { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { initializeAppTC } from '../bll/appReducer'
import { Header } from '../ui/components/Header/Header'
import { Initialization } from '../ui/components/Loader/Initialization'
import { Loader } from '../ui/components/Loader/Loader'
import { NavigationForUs } from '../ui/components/NavigationForUs/NavigationForUs'
import { Pages } from '../ui/pages/Pages'
import { GlobalStyle } from '../ui/styles/global'
import { LightTheme } from '../ui/styles/Themes/LightTheme'

import { useAppDispatch, useAppSelector } from './hooks'

export const App = () => {
   const isInitialized = useAppSelector(state => state.app.isInitialized)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(initializeAppTC())
   }, [])

   if (!isInitialized) {
      return <Initialization />
   }

   return (
      <>
         <ThemeProvider theme={LightTheme}>
            <NavigationForUs />
            <GlobalStyle />
            <Header />
            <Loader start={false} />
            <Pages />
         </ThemeProvider>
      </>
   )
}
