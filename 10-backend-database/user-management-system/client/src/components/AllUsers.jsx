import { useState } from 'react'
import { FaPencil } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function AllUsers() {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        fetch(`https://managementserver-ftnx2hvxe-naim-ahmads-projects.vercel.app/user/${id}`, {
            method: 'delete',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    Swal.fire({
                        icon: 'success', 
                        title: 'Success!',
                        text: 'User Deleted Successful!'
                    })
                setUsers(users.filter(user=> user._id !== id))
            }
        })
    }

  return (
      <div className=''>
          <div className="overflow-x-auto mx-auto max-w-7xl mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, ind)=> <tr key={user._id} className="hover">
                        <th>{ ind + 1 }</th>
                        <td>{ user.name}</td>
                        <td>{ user.email}</td>
                        <td>{ user.gender}</td>
                        <td>{ user.status}</td>
                        <td>
                            <Link to={`/editUser/${user._id}`}>
                                <button className='btn btn-sm'><FaPencil /></button>
                            </Link>
                            <button onClick={()=> handleDelete(user._id)} className='btn btn-sm ml-2'><MdDelete  className='text-lg'/></button>
                        </td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
      </div>
  )
}
