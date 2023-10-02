import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import Login from './components/Login.jsx'
import Orders from './components/Orders.jsx'
import Profile from './components/Profile.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Register from './components/Register.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute><Home/></ProtectedRoute>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/orders',
        element: <ProtectedRoute><Orders/></ProtectedRoute>
      },
      {
        path: '/profile',
        element: <ProtectedRoute><Profile/></ProtectedRoute>
      },
      {
        path: '/dashboard',
        element: <ProtectedRoute><Dashboard/></ProtectedRoute>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
