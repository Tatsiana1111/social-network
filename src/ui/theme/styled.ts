export enum ThemeEnum {
   light = 'light',
   dark = 'dark',
}

export interface ITheme {
   colors: {
      backGroundColor: string
      primary: string
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
}
