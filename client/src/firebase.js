// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2836d.firebaseapp.com",
  projectId: "mern-auth-2836d",
  storageBucket: "mern-auth-2836d.appspot.com",
  messagingSenderId: "501827058710",
  appId: "1:501827058710:web:515816ce7d26e81fc70937"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);