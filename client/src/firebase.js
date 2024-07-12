// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-675ce.firebaseapp.com",
  projectId: "mern-blog-675ce",
  storageBucket: "mern-blog-675ce.appspot.com",
  messagingSenderId: "70990032460",
  appId: "1:70990032460:web:297f1298c12d8854770ee9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
