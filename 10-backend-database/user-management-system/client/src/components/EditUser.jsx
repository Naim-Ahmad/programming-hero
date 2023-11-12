import { useLoaderData, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import InputText from "./InputText"
import Radio from "./Radio"


export default function EditUser() {
    const navigate = useNavigate()
    const user = useLoaderData()

    const handleUpdate = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        const name = form.get('name')
        const email = form.get('email')
        const gender = form.get('gender')
        const status = form.get('status')
        
        const updatedData = { name, email, gender, status }

        fetch(`https://managementserver-ftnx2hvxe-naim-ahmads-projects.vercel.app/user/${user._id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success', 
                        title: 'Success!',
                        text: 'User Updated Successful!'
                    })
                navigate('/')
            }
        })
    }
  return (
    <div className="max-w-lg mt-10 mx-auto bg-base-200 rounded-xl p-10">
          <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Update User Information</h1>
          <p className="text-lg my-6">Use the flowing form to update User Information</p>
          </div>
          <form onSubmit={handleUpdate}>
              <InputText
                  label="What is your Name?"
                  name="name"
                  placeholder="Name"
                  defaultValue={user.name}
              />
              <InputText
                  label="Give me your email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  defaultValue={user.email}
              />
              <div className="divider"></div>
              <div>
                  <span>Gender</span>
                    <div className="flex">
                    <Radio
                        label="Male"
                          name="gender"
                          defaultChecked={user.gender === 'Male'}
                    />
                    <Radio
                        label="Female"
                        name="gender"
                        defaultChecked={user.gender === 'Female'}
                    />
                    </div>
              </div>
              <div className="divider"></div>
              <div>
                  <span>Status</span>
                    <div className="flex">
                    <Radio
                        label="Active"
                          name="status"
                          defaultChecked={user.status === 'Active'}
                    />
                    <Radio
                        label="Inactive"
                          name="status"
                          defaultChecked={user.status === 'Inactive'}
                    />
                    </div>
              </div>
              <input type="submit" className="btn btn-secondary mt-6 w-full" value="Update Information" />
          </form>
    </div>
  )
}
