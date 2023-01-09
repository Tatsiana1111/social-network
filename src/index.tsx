import React from 'react'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'
import { store } from './app/store'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
)
