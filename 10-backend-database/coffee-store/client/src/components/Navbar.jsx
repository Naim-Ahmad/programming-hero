import { Link } from "react-router-dom";


export default function Navbar() {
    
  return (
    <nav className="shadow-lg">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
  <div className="navbar-start">
    <Link t0="/" className="btn btn-ghost normal-case text-xl font-title">Espresso Emporium</Link>
  </div>
  
  <div className="navbar-end">
    <Link to="/addCoffee" className="btn">Add Coffee</Link>
  </div>
    </div>
    </nav>
  )
}
