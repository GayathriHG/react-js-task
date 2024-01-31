import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GuestLayout from './layouts/Guest'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import CertificatePage from './pages/CertificatePage'





const router=createBrowserRouter([
   {
    path:"/",
    element:<GuestLayout/>,
    children:[
        {
            path:"/",
            element:<HomePage/>,
        },
        {
            path:"/projects",
            element:<ProjectsPage/>,
        },
        {
            path:"/certificates",
            element:<CertificatePage/>,
        },
    ]

   } 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
