// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqkKVJWWVM4oBy1qG-F474WKFsvl1PAjM',
  authDomain: 'simple-firebase-dbeef.firebaseapp.com',
  projectId: 'simple-firebase-dbeef',
  storageBucket: 'simple-firebase-dbeef.appspot.com',
  messagingSenderId: '471844225334',
  appId: '1:471844225334:web:71a103f8138445a33c3397',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;