export enum ThemeEnum {
   light = 'light',
   dark = 'dark',
}

export interface ITheme {
   colors: {
      backGroundColor: string
      backGroundColor2: string
      primary: string
      secondary: string
   }
   button: {
      default: {
         bg: string
         text: string
      }
      green: {
         bg: string
         text: string
      }
   }
   media: {
      extraLarge: number
      large: number
      medium: number
      small: number
   }
}
