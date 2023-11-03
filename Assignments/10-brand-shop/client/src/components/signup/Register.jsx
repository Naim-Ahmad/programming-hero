import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Avatar from "../shared/Avatar";
import Form from "../shared/Form";
import Input from "../shared/Input";

const strongPassword = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/

export default function Register() {
  const { registerUser, updateUserInfo } = useContext(AuthContext)
  const { state } = useLocation();
  const navigate = useNavigate()
  
  const handleRegister = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const photoURL = form.get('photoURL')
    const password = form.get('password')

    // validation

    if (password.length < 6) {
      return toast.error('Password must be at least 6 characters long!')
    }

    if (!strongPassword.test(password)) {
     return toast.error(`Password must contain at least one special character (@, #, $, %, ^, &, +, =, or !) and at least one capital letter.`)
     
    }

    // create user
    registerUser(email, password)
      .then(() => {
        updateUserInfo(name, photoURL)
          .then(() => {
            toast.success('Registration Successful!')
            state ? navigate(state) : navigate('/')
          })
          .catch(err => {
            console.log(err)
            toast.error(err.code)
        })
      })
      .catch(err => {
        console.log(err)
        toast.error(err.code)
      })
  }
  return (
    <Form
      handleSubmit={handleRegister}
      title="Please Register Account"
      submitValue="Create Account"
      avatar={<Avatar style="absolute -top-8 left-1/2 -translate-x-1/2" />}
      socialAuth
      style={'sm:w-2/3 md:w-1/2 xl:w-1/3'}
    >
      <Input
            label="What is Your Name ?"
            placeholder="Name"
            name="name"
            required
          />
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <Input
            label="Give Your Photo URL"
            placeholder="Photo URL"
            name="photoURL"
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
          <p>Already have an account? <Link to='/login' className='text-cyan-700'>Login</Link></p>
      </div>
    </Form>
  )
}
