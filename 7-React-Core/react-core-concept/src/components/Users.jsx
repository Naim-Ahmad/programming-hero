import { useEffect, useState } from "react"
import User from "./User"


export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
    //     (async function() {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data = await response.json()
    //         setUsers(data)
    //    })()
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        .then(data=>setUsers(data))
    }, [])

  return (
      <div>
          <h2>Users Lists</h2>
          <div className="grid-container">
              { users.map((user) => <User key={user.id} {...user} />) }
          </div>
    </div>
  )
}
