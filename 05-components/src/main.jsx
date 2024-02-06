import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import InfoPage from './pages/InfoPage.jsx'

const router=createBrowserRouter([
{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/info",
      element:<InfoPage/>
    },
  ]
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)


