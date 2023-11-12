import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


export default function Register() {

    const {register, profileUpdate} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        register(email, password)
            .then(userCredential => {
                console.log(userCredential.user)
                profileUpdate(name)
                    .then(() => {
                        const user = { name, email, password }
                        fetch('https://server-indol-iota.vercel.app/user', {
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                console.log('Create User Successful')
                            }
                        })
                    })
                    .catch(err => {
                    console.log(err)
                })
            })
            .catch(err => {
            console.log(err)
        })
    }
  return (
    <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl mx-auto">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
