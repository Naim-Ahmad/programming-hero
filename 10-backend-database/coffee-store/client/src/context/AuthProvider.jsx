import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import PropTypes from 'prop-types'
import React from 'react'
import auth from '../firebase/firebase.config'

export const AuthContext = React.createContext()

function AuthProvider({ children }) {

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const authInfo = {
        register,
        profileUpdate
    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider
