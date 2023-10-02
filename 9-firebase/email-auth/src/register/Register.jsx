import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";

export default function Register() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const termsRef = useRef(null)

    const handleRegisterSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
      const password = e.target.password.value;
      const name = e.target.name.value;
      const terms = termsRef.current;

      setSuccess('')
      setError('')

      if (password.length < 6) {
        setError('Please provide minimum 6 character!')
        return
      }else if (!terms.checked) {
       setError('Please accept our terms and condition!')
        return
     }
      
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
              console.log(user)
              setError('')
              updateProfile(auth.currentUser, {
                displayName: name
              })
              sendEmailVerification(auth.currentUser)
              .then(() => {
                  setSuccess('User created successfully! Please verify your Email!')
              })
                .catch(err => {
                console.log(err)
              })
            })
          .catch(err => {
            console.error(err)
            setError(err.message)
            setSuccess('')
        })
    }
  return (
    <div className="sm:hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            {(error || success) && <h3 className={`text-xl rounded-lg bg-opacity-5 p-3 ${error ? 'text-red-600 bg-red-200 ': 'text-green-600 bg-green-200'}`}> { error ? error : success} </h3>}
      <form onSubmit={handleRegisterSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Provide an Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Provide 6 character password" name="password" className="input input-bordered" />
          <label className="label">
            <span>You have already an account? <Link to='/login' >Login</Link></span>
                </label>
                
              </div>
              <div>
          <input type="checkbox" name="terms" ref={termsRef} />
          <label htmlFor="terms" className="ms-2">Accept our terms and condition</label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
  )
}
