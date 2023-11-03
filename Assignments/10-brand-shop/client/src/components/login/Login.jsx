import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Avatar from '../shared/Avatar';
import Form from "../shared/Form";
import Input from "../shared/Input";

const strongPassword = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/

export default function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleLogin = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    // validation

    if (password.length < 6) {
       return toast.error('Password must be at least 6 characters long!') 
    }

    if (!strongPassword.test(password)) {
      return toast.error(`Password must contain at least one special character (@, #, $, %, ^, &, +, =, or !) and at least one capital letter.`) 
    }

    // login
    login(email, password)
      .then(() => {
        toast.success('Login Successful!')
        state ? navigate(state) : navigate('/')
      })
      .catch(err => {
        console.log(err.code)
        if (err.code == 'auth/invalid-login-credentials') {
         return toast.error('Email or Password doesn\'t match!')
        }
        toast.error(err.code)
      })
      .catch(err => {
        console.log(err)
        toast.error(err.code)
      })
  }
  return (
    <Form
      handleSubmit={handleLogin}
      title="Please Login"
      submitValue="Login"
      avatar={<Avatar style="absolute -top-8 left-1/2 -translate-x-1/2" />}
      socialAuth
      style={'sm:w-2/3 md:w-1/2 xl:w-1/3'}
    >
          <Input
            label="Email Address"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          
          <Input
            label="Type a password"
            type="password"
            placeholder="Password"
            name="password"
            required
      />
      <div className='mt-6'>
          <p>Do not have account? <Link to='/register' className='text-cyan-700'>Register</Link></p>
      </div>
    </Form>
  )
}
