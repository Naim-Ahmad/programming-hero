
function Navbar() {
  return (
    <nav className="navbar bg-base-100 max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Knowledge Cafe</a>
      </div>
      <div className="flex-none gap-2">
        
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/6mKBhFD/M2004-J19-C863.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar