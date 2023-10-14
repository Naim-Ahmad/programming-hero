import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Glasses from './components/Glasses.jsx'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import Login from './components/Login.jsx'
import NotFound from './components/NotFound.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Register from './components/Register.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/>},
      {path: '/register', element: <Register/>},
      { path: '/about', element: <About /> },
      { path: '/glasses', element: <ProtectedRoute><Glasses /></ProtectedRoute> },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
