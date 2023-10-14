
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import auth from '../firebase/firebase.config';

export default function Register() {
    const { registerWithEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleRegister = e => {
        e.preventDefault()
        // get field value
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(terms)

        // validation
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!*])[A-Za-z\d@#$%^&!*]{8,}$/;

        if (password.length < 6) {
            toast.error('Password must be 6 characters')
            return
        } else if (!strongPasswordRegex.test(password)) {
            toast.error('Password is not strong enough.')
            return
        } else if (!terms) {
            toast.error('Accept our terms and condition.')
            return
        }

        // create user
        registerWithEmail(email, password)
        .then(()=>{
            updateProfile(auth.currentUser, {
                displayName: name
            })
            sendEmailVerification(auth.currentUser)
                .then(res => {
                    console.log(res)
                    toast.success('Registration successful. Please Verify Your Email!')
                    navigate('/login')
                })
                .catch(err => {
                console.error(err)
            })
        })
        .catch(err => {
            toast.error(err.code)
            console.error(err)
        })
        
    }
  return (
    <>
    
      <div className='flex justify-center items-center min-h-[90vh]'>
        <form onSubmit={handleRegister} className="flex max-w-3xl w-96 flex-col gap-4 border p-6 rounded-xl shadow-2xl">
              <h1 className='text-3xl font-bold'>Register Now</h1>
               <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="name"
                    value="Your Name"
                />
                </div>
                <TextInput
                id="name"
                required
                shadow
                type="text"
                name='name'
                placeholder='Naim Ahmad'
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="email2"
                    value="Your email"
                />
                </div>
                <TextInput
                id="email2"
                placeholder="name@gmail.com"
                required
                shadow
                type="email"
                name='email'
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="password2"
                    value="Your password"
                />
                </div>
                <TextInput
                id="password2"
                required
                shadow
                type="password"
                          name='password'
                          placeholder='abc123$'
                />
            </div>
           
            <div className="flex items-center gap-2">
                <Checkbox id="agree" name='terms' />
                <Label
                className="flex"
                htmlFor="agree"
                >
                <p>
                    I agree with the 
                </p>
                <a
                    className="text-cyan-600 hover:underline dark:text-cyan-500 ms-2"
                    href="/forms"
                >
                    <p>
                    terms and conditions
                    </p>
                </a>
                </Label>
            </div>
            <Button type="submit">
                Register new account
              </Button>
              <div>
                  Already have account ? <Link to='/Login'><span className='text-cyan-700 underline'>Login</span></Link>
                </div>
        </form>
        <Toaster />
    </div>
    </>
  )
}
