import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/logo.svg";
import { AuthContext } from "../contexts/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Log Out Successful!");
      })
      .catch((err) => console.log(err));
  };

  const listItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/servicesDetails">Services</NavLink>
      </li>
      <li>
        <NavLink to="/addService">Add Service</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/bookingList">Booking List</NavLink>
        </li>
      )}
      <li>
        {user ? (
          <Link>
            <button onClick={handleLogout}>Log out</button>
          </Link>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </>
  );
  return (
    <nav className="shadow-lg bg-base-100">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listItem}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/appointment" className="btn btn-outline btn-error">
            Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
