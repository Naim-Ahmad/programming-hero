/* eslint-disable react/prop-types */
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if(user){
        setLoading(false);
        axios.post('http://localhost:5000/jwt', {email: user.email}, {withCredentials: true})
        .then(res=> {
          console.log(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
      }else{
        setLoading(true)
        axios.get('http://localhost:5000/logout', {withCredentials: true})
        .then(res=> {
          console.log(res.data)
        })
        .catch(err=> {
          console.log(err)
        })
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    login,
    register,
    profileUpdate,
    loginWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
