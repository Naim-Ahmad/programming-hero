import { Avatar, Dropdown } from 'flowbite-react'
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../contexts/AuthProvider'


export default function UserDropdown() {

    const {logOut, user} = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
            toast.success('Log out Successful!')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.code)
            })
    }
  return (
    <Dropdown
          arrowIcon={false}
          inline
          label={user.photoURL ? <Avatar alt={user.displayName} img={user.photoURL} rounded/>: <div className='border rounded-full bg-sky-400 text-white text-xl p-2 w-[3rem] font-bold'>{ user.displayName[0] }</div>}
        >
                  
          <DropdownItem>
            Dashboard
          </DropdownItem>
          <DropdownItem>
            Settings
          </DropdownItem>
          <DropdownItem>
            Earnings
          </DropdownItem>
          <Dropdown.Divider />
          <DropdownItem onClick={handleLogout}>
            Sign out
          </DropdownItem>
        </Dropdown>
  )
}
