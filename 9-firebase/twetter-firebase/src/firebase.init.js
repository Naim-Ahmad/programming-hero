// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCcuWszwJcUIMr68zJmZDyQXQxvvFxW7u0',
  authDomain: 'twitter-auth-test-a2332.firebaseapp.com',
  projectId: 'twitter-auth-test-a2332',
  storageBucket: 'twitter-auth-test-a2332.appspot.com',
  messagingSenderId: '1005972017221',
  appId: '1:1005972017221:web:aed5517a64562ab220532c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;