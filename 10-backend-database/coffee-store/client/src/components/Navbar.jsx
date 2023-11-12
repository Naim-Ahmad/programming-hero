import { Link, NavLink } from "react-router-dom";


export default function Navbar() {

  const listItem =
        <>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/addCoffee">Add Coffee</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </>
    
  return (
    <nav className="shadow-lg">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
  <div className="navbar-start">
    <Link t0="/" className="btn btn-ghost normal-case text-xl font-title">Espresso Emporium</Link>
        </div>
        
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {listItem}
        </ul>
      </div>
  
  <div className="navbar-end">
    <Link to="/login" className="btn btn-secondary">Login</Link>
  </div>
    </div>
    </nav>
  )
}
