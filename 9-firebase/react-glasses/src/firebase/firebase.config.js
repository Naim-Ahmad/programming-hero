// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5gecuMWXqvz71uC9IThN5o-2XIX0-07s',
  authDomain: 'react-glasses-70119.firebaseapp.com',
  projectId: 'react-glasses-70119',
  storageBucket: 'react-glasses-70119.appspot.com',
  messagingSenderId: '400388160816',
  appId: '1:400388160816:web:9b7bcc6f856cb608e4dcf5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth