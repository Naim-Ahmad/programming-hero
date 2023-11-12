import { Link } from "react-router-dom";


export default function Navbar() {
  return (
      <nav className="shadow-lg ">
          <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl">User Management</Link>
            </div>
        
            <div className="navbar-end">
                <Link to="/createUser"><button className="btn">Create new user</button></Link>
            </div>
        </div>
    </nav>
  )
}
