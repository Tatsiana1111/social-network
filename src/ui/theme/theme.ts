import { DefaultTheme } from 'styled-components'

import { ThemeEnum } from './ThemeType'

export const lightTheme: DefaultTheme = {
   type: ThemeEnum.light,

   colors: {
      backGroundColor: '#E5E5E5',
      primary: '#7398CE',
   },
   button: {
      default: {
         bg: '#1877F2',
         text: '#fff',
      },
      green: {
         bg: '#42B72A',
         text: '#fff',
      },
   },
}

export const darkTheme: DefaultTheme = {
   type: ThemeEnum.dark,

   colors: {
      primary: '#314272',
      backGroundColor: 'red',
   },
   button: {
      default: {
         bg: '#4ad',
         text: '#035',
      },
      green: {
         bg: '#94a3b8',
         text: 'black',
      },
   },
}
