import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = React.createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider);
    }
    const loginWithGithub = () => {
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider);
    }

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.emailVerified) {
                setUser(user)
                setLoading(false)
            } else {
                setUser(null)
            }
            
        })
        
        return ()=> unsubscribe()
    }, [])
    const authInfo = {
        user,
        registerWithEmail,
        loginWithEmail,
        loginWithGoogle,
        loginWithGithub,
        resetPassword,
        logOut,
        loading
    }
  return (
      <AuthContext.Provider  value={authInfo}>
          {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}
