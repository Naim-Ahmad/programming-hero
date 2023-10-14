
import { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { AuthContext } from '../../contexts/AuthProvider'

export default function Login() {

    const { singInWithEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const {state} = useLocation()
   

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        singInWithEmail(email, password)
            .then(() => {
                navigate(state ? state : '/')
            })
            .catch(err => {
                console.error(err)
            })
        
      }
  return (
      <>
        <Navbar />
        <div className="hero min-h-[80vh]">
            <div className="hero-content w-2xl w-[752px] flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-3xl text-center font-semibold text-dark-02'>Login your account</h1>
                            <div className="divider"></div>
                        <div className="form-control">
                        <label className="label text-lg font-semibold">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label text-lg font-semibold">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="Password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>   
                        </div>
                        <div className="mt-6 text-center">
                        Dont’t Have An Account ? <Link className='text-orange-500' to="/register">Register</Link>   
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </>
  )
}
