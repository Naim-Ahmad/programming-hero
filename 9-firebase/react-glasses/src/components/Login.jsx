'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

export default function Login() {

    const {loginWithGoogle, loginWithEmail,loginWithGithub, resetPassword} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSocialLogin = (callback) => {
        callback()
            .then(() => {
                toast.success('Login Successful!')
                return navigate('/')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.code)
        })
    }

    const handleLogin = e =>{
        e.preventDefault()
        // get field value
        const email = e.target.email.value;
        const password = e.target.password.value;
        // validation
        loginWithEmail(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    toast.success('Login Successful')
                    navigate('/')
                } else {
                    toast.error('Please Verify Your Email!')
                }
                
            })
            .catch(err => {
                console.error(err)
                toast.error(err.code)
            })
        
    }

    const handleResetPassword = (e) => {
        const email = e.target.parentNode.parentNode.email.value;
            resetPassword(email)
                .then(() => {
                toast.success('Password reset email sent!')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.code)
        })
    }
  return (
      <div className="flex justify-center min-h-[80vh] items-center">
          <form onSubmit={handleLogin} className="flex max-w-3xl w-96 flex-col gap-4 border shadow-2xl p-6 rounded-xl">
            <h1 className='text-3xl font-bold'>Please Login</h1>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Your email"
                    />
                    </div>
                    <TextInput
                    id="email1"
                    placeholder="name@flowbite.com"
                    required
                    type="email"
                    name='email'
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Your password"
                    />
                    </div>
                    <TextInput
                    id="password1"
                    required
                    type="password"
                    name='password'
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button type='button' onClick={handleResetPassword}>Forget Password?</button>
                </div>
                <Button type="submit">
                    Login
                </Button>
              <div>
                  New Here ? <Link to='/register'><span className='text-cyan-700 underline'>Register Now</span></Link>
              </div>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
            </div>
              <div className='flex justify-around'>
                  <Button color='dark' size='sm' onClick={()=> handleSocialLogin(loginWithGoogle)}>Google</Button>
                  <Button onClick={() => handleSocialLogin(loginWithGithub)} color='dark' size='sm'>Github</Button>
              </div>
            </form>
    </div>
  )
}


