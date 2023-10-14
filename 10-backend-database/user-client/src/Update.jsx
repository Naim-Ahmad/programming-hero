import { useLoaderData } from "react-router-dom";


export default function Update() {

    const user = useLoaderData()

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }
        
        
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data=>console.log(data))
    }

  return (
      <div>
          <h1>Update Data of {user?.name}</h1>
          <form onSubmit={handleUpdate}>
              <input type="text" name="name" defaultValue={user?.name} /> <br />
              <input type="email" name="email" defaultValue={user?.email} /> <br />
              <input type="submit" value="Update" />
          </form>
    </div>
  )
}
