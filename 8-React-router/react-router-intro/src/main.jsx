import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createContact, getContact, getContacts } from './contacts'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import Root from './routes/root.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const contacts = await getContacts()
      return {contacts};
    },
    action: async () => {
      const contact = await createContact()
      return {contact};
    },
    children: [{
      path: '/contacts/:contactId',
      element: <Contact />,
      loader: async ({ params }) => {
        const contact = await getContact(params.contactId);
        return { contact };
      }
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
