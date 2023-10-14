import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import AllTasks from './components/AllTasks.jsx'
import TasksProvider from './contexts/TasksProvider.jsx'
import './index.css'
import { BASEURL } from './utilities/baseUrl.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element:<TasksProvider><AllTasks /></TasksProvider>,
        loader: ()=> fetch(`${BASEURL}/tasks`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
