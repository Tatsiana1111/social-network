import { DefaultTheme } from 'styled-components'

import { ThemeEnum } from './ThemeType'

export const lightTheme: DefaultTheme = {
   type: ThemeEnum.light,

   colors: {
      backGroundColor: '#E5E5E5',
      backGroundColor2: '#E5E5E5',
      primary: '#000',
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
   media: {
      extraLarge: 1140,
      large: 960,
      medium: 720,
      small: 540,
   },
}

export const darkTheme: DefaultTheme = {
   ...lightTheme,
   type: ThemeEnum.dark,

   colors: {
      primary: '#E8F3D6',
      backGroundColor: '#00425A',
      backGroundColor2: '#567189',
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
