import React, { ChangeEvent } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setAppThemeAC } from '../../../bll/appReducer'

import s from './ThemeSwitcher.module.css'

export const ThemeSwitcher = () => {
   const dispatch = useAppDispatch()
   const theme = useAppSelector(state => state.app.theme)

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setAppThemeAC({ theme: e.target.checked ? 'light' : 'dark' }))
   }

   return (
      <div className={s.ThemeSwitcher}>
         <div className={s.toggleWrapper}>
            <input
               type="checkbox"
               checked={theme === 'light'}
               onChange={onChangeHandler}
               className={s.dn}
               id="dn"
            />
            <label htmlFor="dn" className={s.toggle}>
               <span className={s.toggle__handler}>
                  <span className={`${s.crater} ${s.crater1}`}></span>
                  <span className={`${s.crater} ${s.crater2}`}></span>
                  <span className={`${s.crater} ${s.crater3}`}></span>
               </span>
               <span className={`${s.star} ${s.star1}`}></span>
               <span className={`${s.star} ${s.star2}`}></span>
               <span className={`${s.star} ${s.star3}`}></span>
               <span className={`${s.star} ${s.star4}`}></span>
               <span className={`${s.star} ${s.star5}`}></span>
               <span className={`${s.star} ${s.star6}`}></span>
            </label>
         </div>
      </div>
   )
}
