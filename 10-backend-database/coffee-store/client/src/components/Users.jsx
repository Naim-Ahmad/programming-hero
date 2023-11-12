import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import UserRow from "./UserRow"


export default function Users() {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        console.log(id)
        fetch(`https://server-indol-iota.vercel.app/user/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                setUsers(users.filter(user=> user._id !== id))
            }
        })
    }

  return (
      <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
            
                      {/* row  */}
                      {users?.map((user, ind) => <UserRow
                          handleDelete={handleDelete}
                          user={user} serial={ind + 1}
                          key={user._id} />)}
                
                </tbody>
            </table>
            </div>
      </div>
  )
}
