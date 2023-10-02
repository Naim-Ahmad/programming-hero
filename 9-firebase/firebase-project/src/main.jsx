import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import MainLayout from './components/MainLayout.jsx'
import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '/', element: <Home /> },
    {path: '/login', element: <Login/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
