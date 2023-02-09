import { appReducerInitialState, AppThemeType } from '../../bll/appReducer'

export const loadStateApp = () => {
   const themeApp = localStorage.getItem('themeApp')

   if (themeApp) {
      return { ...appReducerInitialState, theme: themeApp as AppThemeType }
   }
}

export const saveState = (themeApp: AppThemeType): void => {
   try {
      localStorage.setItem('themeApp', themeApp)
   } catch {
      throw new Error('Error save to Local Storage')
   }
}
