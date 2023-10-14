
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { AuthContext } from '../../contexts/AuthProvider'

export default function Register() {
    const { signUpWithEmail } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const photoURL = formData.get('photoURL')
        const password = formData.get('password')
        
        signUpWithEmail(email, password)
            .then(userData => {
                const user = userData.user;
                console.log(user)
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
                    <form onSubmit={handleRegister} className="card-body">
                          <h1 className='text-3xl text-center font-semibold text-dark-02'>Register your account</h1>
                          
                        <div className="divider"></div>
                        <div className="form-control">
                            <label className="label text-lg font-semibold">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label text-lg font-semibold">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label text-lg font-semibold">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter Your Photo URL" name='photoURL' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label text-lg font-semibold">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" name='terms' className="input input-bordered" required />
                            <label className="label text-lg font-semibold">
                                <span className="label-text">Accept Term & Conditions</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Register</button>   
                        </div>
                        <div className="mt-6 text-center">
                        Already Have An Account ? <Link className='text-orange-500' to="/login">Login</Link>   
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </>
  )
}
