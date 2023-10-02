import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'
import app from "../firebase/firebase.init"

export default function Login() {

    const [user, setUser] = useState(null)

    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider()
    const githubAuthProvider = new GithubAuthProvider()

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch(err => {
            console.log(err.message)
        })
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
            setUser(null)
            })
        .catch(err=>console.log(err.message))
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
        .catch(err=> console.log(err.message))
    }
  
  return (
      <div>
          <h2>Login</h2>
          {
              user ? <button onClick={handleLogOut}>Log out</button> :
              <>
                  <button onClick={handleGoogleLogin}>Login with google</button>
                  <button onClick={handleGithubLogin}>Login with github</button>
              </>
          }
          {
              user && <div>
                  <h2>Name: {user.displayName}</h2>
                  <h2>Email: {user.email}</h2>
                  <img src={user.photoURL} alt="" />
                  </div>
          }
    </div>
  )
}
