/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";


export default function Login() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError('')
    setSuccess('')

     if (password.length < 6) {
        setError('Please provide minimum 6 character!')
        return
     } 
     
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const loggedUser = userCredential.user;
        if (loggedUser.emailVerified) {
          setSuccess('Login successful')
          console.log(loggedUser)
        } else {
          setError('Please verify your email!')
        }
      })
      .catch(err => {
        console.log(err)
        setError(err.message)
    })
  }
  return (
    <div className="sm:hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            {(error || success) && <h3 className={`text-xl rounded-lg bg-opacity-5 p-3 ${error ? 'text-red-600 bg-red-200 ': 'text-green-600 bg-green-200'}`}> { error ? error : success} </h3>}
            <form onSubmit={handleLogin}>
              <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Your password" name="password" className="input input-bordered" required />
          <label className="label">    
            <span>Don't have account? Please <Link to="/register">Register</Link></span>
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
