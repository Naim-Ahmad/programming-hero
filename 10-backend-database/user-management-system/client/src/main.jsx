import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AllUsers from './components/AllUsers.jsx'
import CreateNewUser from './components/CreateNewUser.jsx'
import EditUser from './components/EditUser.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AllUsers />,
        loader: ()=> fetch(`https://managementserver-ftnx2hvxe-naim-ahmads-projects.vercel.app/users`)
      },
      {
        path: '/createUser',
        element: <CreateNewUser />,
      },
      {
        path: '/editUser/:id',
        element: <EditUser />,
        loader: ({params})=> fetch(`https://managementserver-ftnx2hvxe-naim-ahmads-projects.vercel.app/user/${params.id}`)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
