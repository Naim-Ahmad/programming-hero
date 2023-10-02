import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()

    const loginHandler = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
                navigate('/')
            })
            .catch(err => {
            console.error(err)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={loginHandler}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Your Password" name="password" className="input input-bordered" />
          <label className="label">
           <p>New Here? Please  <Link to="/register">Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       </form>
      </div>
    </div>
  </div>
</div>
  )
}
