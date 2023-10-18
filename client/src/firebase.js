// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f571a.firebaseapp.com",
  projectId: "mern-auth-f571a",
  storageBucket: "mern-auth-f571a.appspot.com",
  messagingSenderId: "1094855488175",
  appId: "1:1094855488175:web:e68743e98d10aa0d991a5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
