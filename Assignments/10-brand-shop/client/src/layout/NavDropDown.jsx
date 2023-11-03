import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import ThemeToggler from './ThemeToggler';

export default function NavDropDown() {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successful!')
            })
            .catch(err => {
            console.log(err)
        })
    }
  return (
    <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img src={user?.photoURL ? user?.photoURL: 'https://i.ibb.co/fMhTpQd/no-User.jpg'} />
            </div>
        </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box min-w-fit">
              <li>
              <div className="mr-3 sm:hidden">
                    <ThemeToggler/>
                </div>
              </li>
              <li>
                  <p className="text-lg font-semibold">{ user?.displayName}</p>
                  <p className="text-xs font-medium">{ user?.email}</p>
              </li>
            <li onClick={handleLogout}><Link>Logout</Link></li>
        </ul>
        </div>
  )
}
