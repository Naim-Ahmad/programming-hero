// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9nsYjqbaTHD3e4OJVe3O3ncR3RXovY_0',
  authDomain: 'moha-milon-b726d.firebaseapp.com',
  projectId: 'moha-milon-b726d',
  storageBucket: 'moha-milon-b726d.appspot.com',
  messagingSenderId: '634705053467',
  appId: '1:634705053467:web:0cdcd5dce77b42ea7235be',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;

