
import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Users() {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Success')
                    const newData = users.filter(user => user._id !== id)
                    setUsers(newData)
                }
            })
    }
  return (
      <div>
          <h2>User: {users.length}</h2>
          {users?.map(user => <p key={user._id}>name: {user.name}. email {user.email} { user._id}<Link to={`/update/${user._id}`}><button>Update</button></Link> <button onClick={()=>handleDelete(user._id)}>X</button></p>)}
    </div>
  )
}
