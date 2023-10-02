import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = React.createContext(null)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email , password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setLoading(false)
                setUser(currentUser)
            } else {
                setUser(null)
                setLoading(false)
            }
        })
    },[])

    const userInfo = {
        user,
        createUser,
        login,
        logOut,
        loading
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}
