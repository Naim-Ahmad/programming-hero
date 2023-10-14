'use client';

import { Button, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link, NavLink, useResolvedPath } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import UserDropdown from './UserDropdown';

export default function DefaultNavbar() {
    const { pathname } = useResolvedPath()
    const {user} = useContext(AuthContext)
    
  return (
    <Navbar
      fluid
          rounded
          className='shadow-xl'
    >
      <Link
        to="/"
      >
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          React Glasses
        </span>
      </Link>
      <div className="flex md:order-2">
              {
                  user ? <UserDropdown /> : !user && (pathname !== '/login') ? <Button><Link to='/login'>Login</Link></Button> : <Button><Link to='/register'>Register</Link></Button>
            }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>
            About
        </NavLink>
        <NavLink to="/glasses">
          Glasses
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}


