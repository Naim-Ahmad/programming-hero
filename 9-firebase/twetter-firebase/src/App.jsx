import { TwitterAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'
import './App.css'
import app from './firebase.init'


export default function App() {
  const [user, setUser] = useState(null)

  const auth = getAuth(app)
  const twitterAuthProvider = new TwitterAuthProvider()

  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterAuthProvider)
      .then(res => {
        const user = res.user;
        console.log(user)
        setUser(user)
      })
      .catch(err => console.log(err))
  
  }
  const handleLogOut = () => {
    signOut(auth)
      .then(() => setUser(null))
    .catch(err=> console.log(err))
  }

  return (
    <>
     
      <h1>Twitter auth</h1>
      <button onClick={handleTwitterLogin}>Login by Twitter</button>
      <button onClick={handleLogOut}>Log Out</button>
      {
        user && (
          <div>
            <h2>name: { user.displayName}</h2>
            <h2>Email: { user.email}</h2>
            <img src={user.photoURL} alt="" />
          </div>
        )
      }
      
    </>
  )
}

