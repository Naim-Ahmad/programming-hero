import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AddCoffee from './components/AddCoffee.jsx'
import EditCoffee from './components/EditCoffee.jsx'
import Home from './components/Home.jsx'
import ViewDetails from './components/ViewDetails.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee/>
      },
      {
        path: '/editCoffee/:id',
        element: <EditCoffee />,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/viewDetails/:id',
        element: <ViewDetails />,
        loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
