import React from 'react'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PageNotFoundWrapper = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   height: calc(100vh - 90px);
   width: 100%;
   text-align: center;
   background-color: #95c2de;

   .err {
      color: #ffffff;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 11rem;
   }
   .msg {
      line-height: 1.7;
      font-family: 'Nunito Sans', sans-serif;
      font-size: 1.6rem;
      a {
         color: white;
         text-decoration: none;
      }
      a:hover {
         color: wheat;
      }
   }
`

export const PageNotFound = () => {
   return (
      <PageNotFoundWrapper>
         <h1 className={'err'}>404</h1>
         <div className={'msg'}>
            Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
            first place?
            <p>
               Lets go <NavLink to="/">home</NavLink> and try from there.
            </p>
         </div>
      </PageNotFoundWrapper>
   )
}
