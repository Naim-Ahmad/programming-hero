import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import InputText from "./InputText";
import Radio from "./Radio";

export default function CreateNewUser() {
    const navigate = useNavigate()

    const handleNewUser = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const name = form.get('name')
        const email = form.get('email')
        const gender = form.get('gender')
        const status = form.get('status')
        
        const user = { name, email, gender, status }
        
        fetch('https://managementserver-ftnx2hvxe-naim-ahmads-projects.vercel.app/user', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success', 
                        title: 'Success!',
                        text: 'User Created Successful!'
                    })
                navigate('/')
            }
        })
    }

  return (
      <div className="max-w-lg mt-10 mx-auto bg-base-200 rounded-xl p-10">
          <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">New User</h1>
          <p className="text-lg my-6">Use the flowing form to create new account</p>
          </div>
          <form onSubmit={handleNewUser}>
              <InputText
                  label="What is your Name?"
                  name="name"
                  placeholder="Name"
              />
              <InputText
                  label="Give me your email"
                  name="email"
                  type="email"
                  placeholder="Email"
              />
              <div className="divider"></div>
              <div>
                  <span>Gender</span>
                    <div className="flex">
                    <Radio
                        label="Male"
                        name="gender"
                    />
                    <Radio
                        label="Female"
                        name="gender"
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
                    />
                    <Radio
                        label="Inactive"
                        name="status"
                    />
                    </div>
              </div>
              <input type="submit" className="btn btn-secondary mt-6 w-full" value="Create Account" />
          </form>
    </div>
  )
}
