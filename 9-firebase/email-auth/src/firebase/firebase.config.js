// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjB4iHNH0GPOlspZIAXdGhO89GsUtw2GU',
  authDomain: 'email-auth-b4e41.firebaseapp.com',
  projectId: 'email-auth-b4e41',
  storageBucket: 'email-auth-b4e41.appspot.com',
  messagingSenderId: '892848660619',
  appId: '1:892848660619:web:d0964c5ce94456791b348e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;