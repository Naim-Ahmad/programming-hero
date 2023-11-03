import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/AuthProvider';
import NavDropDown from "./NavDropDown";
import ThemeToggler from "./ThemeToggler";


export default function Navbar() {
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const navItems = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/addProduct'>Add Product</NavLink></li>
    <li><NavLink to={`/myCart/${user?.email}`}>My Cart</NavLink></li>
</>
  return (
    <div className="bg-base-100 shadow-xl ">
    <div className="navbar max-w-7xl mx-auto px-6">
        <div className="navbar-start">
        <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Tech Pulse<span className="text-green-500">Pro</span></Link>
    </div>
        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal px-1">
              {navItems}
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <div className="mr-3 hidden sm:block">
            <ThemeToggler/>
          </div>
          {user
            ? <NavDropDown />
            : location.pathname == '/login'
              ? <Link  to="/register" className="btn btn-accent btn-sm sm:btn-md capitalize text-gray-700">Register</Link>
              : <Link to="/login" className="btn btn-sm sm:btn-md btn-accent capitalize text-gray-700">Login</Link>}
    </div>
  </div>
</div>
  )
}
