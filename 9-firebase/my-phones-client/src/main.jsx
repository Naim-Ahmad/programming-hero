import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PhoneDetails from './components/PhoneDetails'
import Phones from './components/Phones.jsx'
import Root from './components/Root.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/phones',
        element: <Phones />,
        loader: () => fetch('http://localhost:5000/phones')
      },
      {
        path: '/phone/:id',
        element: <PhoneDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
