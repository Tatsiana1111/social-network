import React, { ChangeEvent } from 'react'

import s from './ThemeSwitcher.module.css'

// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
// https://www.youtube.com/watch?v=U8f01SM8Kq4&t=62s
export const ThemeSwitcher = () => {
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {}

   return (
      <div className={s.ThemeSwitcher}>
         <div className={s.toggleWrapper}>
            <input type="checkbox" onChange={onChangeHandler} className={s.dn} id="dn" />
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
