import { appReducerInitialState, AppThemeType } from '../../bll/appReducer'

export const loadStateApp = () => {
   const themeApp = localStorage.getItem('themeApp')

   if (themeApp && JSON.parse(themeApp) !== null) {
      return { ...appReducerInitialState, theme: themeApp as AppThemeType }
   }
}

export const saveState = (themeApp: AppThemeType): void => {
   try {
      localStorage.setItem('themeApp', JSON.stringify(themeApp))
   } catch {
      throw new Error('Error save to Local Storage')
   }
}
