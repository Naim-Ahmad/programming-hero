import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import DefaultNavbar from './Navbar'

export default function Layout() {
    return (
        <>
            <Toaster/>
            <DefaultNavbar/>
            <main>
                <Outlet></Outlet>
            </main>
        </>
      
  )
}
