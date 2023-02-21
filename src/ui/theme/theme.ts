import { DefaultTheme } from 'styled-components'

import { ThemeEnum } from './ThemeType'

export const lightTheme: DefaultTheme = {
   type: ThemeEnum.light,

   colors: {
      backGroundColor: '#E5E5E5',
      backGroundColor2: '#E5E5E5',
      primary: '#000',
      secondary: '#0e0eb6',
   },
   input: {
      bg: '#fff',
      text: '#000',
      placeholder: '#afaaaa',
      focus: '#749dd6',
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
      small: 580,
   },
}

export const darkTheme: DefaultTheme = {
   ...lightTheme,
   type: ThemeEnum.dark,

   colors: {
      backGroundColor: '#00425A',
      backGroundColor2: '#567189',
      primary: '#E8F3D6',
      secondary: '#06f5d9',
   },
   input: {
      bg: '#008B8BFF',
      text: '#fff',
      placeholder: '#7da6a4',
      focus: '#74d693',
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
