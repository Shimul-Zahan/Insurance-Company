import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Others/router/router.jsx'
import NavbarContextProvider from './Others/context/NavbarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarContextProvider>
      <RouterProvider router={router} />
    </NavbarContextProvider>
  </React.StrictMode>,
)
