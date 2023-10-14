import { useContext } from 'react'
import { AiFillInstagram, AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import { AuthContext } from '../../contexts/AuthProvider'

export default function Aside() {
  const {signInWithGoogle}  = useContext(AuthContext)
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(res => {
        console.log(res.user)
      })
    .catch(err=> console.error(err))
  }
  return (
    <aside>
        <div className='mb-8'>
          <h2 className="text-xl font-semibold mb-6">Login With</h2>
          <button onClick={handleGoogleLogin} className='flex items-center mb-3 text-cyan-400 border border-cyan-400 py-3 px-16 rounded-lg mx-auto text-center w-full'><AiOutlineGoogle className='text-xl mr-2'></AiOutlineGoogle> Login with Google</button>
          <button className='flex items-center text-dark-02 border border-dark-02 py-3 px-16 rounded-lg mx-auto text-center w-full'><AiOutlineGithub className='text-xl mr-2'></AiOutlineGithub> Login with Github</button>
        </div>  
        <div>
          <h2 className="text-xl font-semibold mb-6">Find Us On</h2>
          <div>
            <div className='border py-4 px-2'>
              <a href="#" className='flex items-center gap-2'><FaFacebookF className='text-3xl p-1 bg-[#F3F3F3] rounded-full text-[#4754a4]' /> Facebook</a>
            </div>
            <div className='border py-4 px-2'>
              <a href="#" className='flex items-center gap-2'><FaTwitter className='text-3xl p-1 bg-[#F3F3F3] rounded-full text-sky-500' /> Twitter</a>
            </div>
            <div className='border py-4 px-2'>
              <a href="#" className='flex items-center gap-2'><AiFillInstagram className='text-3xl p-1 bg-[#F3F3F3] rounded-full text-orange-600' /> Instagram</a>
            </div>
          </div>
        </div>  
        {/* q zone */}
        <div className='bg-dark-07 p-4 mt-10'>
          <h2 className="text-xl font-semibold mb-6">Q-Zone </h2>
          <div>
            <div className='border py-4 px-2'>
              <img src={qzone1} alt="" />
            </div>
            <div className='border py-4 px-2'>
            <img src={qzone2} alt="" />
            </div>
            <div className='border py-4 px-2'>
            <img src={qzone3} alt="" />
            </div>
          </div>
        </div>  
      </aside>
  )
}
