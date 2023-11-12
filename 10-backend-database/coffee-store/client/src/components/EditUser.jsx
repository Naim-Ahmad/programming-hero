import { useLoaderData } from "react-router-dom"
import Form from "./Form"
import Input from "./Input"


export default function EditUser() {
    const user = useLoaderData()
    const handleUserEdit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const updateUser = { name, email, password }
        console.log(updateUser)
        
        fetch(`https://server-indol-iota.vercel.app/user/${user._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
            console.log(data)
        })
        
    }
  return (
    <Form
      title="Edit User Information"
      value="Update User Details"
      handleSubmit={handleUserEdit}
    >
          <Input
              defaultValue={user.name}
              label="Name"
              placeholder="Enter Your name"
              classes='col-span-2'
          />
     
          <Input
              type="email"
              defaultValue={user.email}
              label="Email"
              placeholder="Enter coffee details"
              classes='col-span-2'
          />
          <Input
              type="password"
              defaultValue={user.password}
              label="Password"
              placeholder="Enter Your Password"
              classes='col-span-2' />
     
    </Form>
  )
}
