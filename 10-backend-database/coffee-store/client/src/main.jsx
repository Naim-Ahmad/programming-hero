import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import EditCoffee from './components/EditCoffee.jsx'
import EditUser from './components/EditUser.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Users from './components/Users.jsx'
import ViewDetails from './components/ViewDetails.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('https://server-indol-iota.vercel.app/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee/>
      },
      {
        path: '/editCoffee/:id',
        element: <EditCoffee />,
        loader: ({params})=> fetch(`https://server-indol-iota.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/viewDetails/:id',
        element: <ViewDetails />,
        loader: ({params})=> fetch(`https://server-indol-iota.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/users',
        element: <Users />,
        loader: ()=> fetch('https://server-indol-iota.vercel.app/users')
      },
      {
        path: '/editUser/:id',
        element: <EditUser />,
        loader: ({ params })=> fetch(`https://server-indol-iota.vercel.app/user/${params.id}`)
      },
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
