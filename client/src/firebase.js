// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-8f035.firebaseapp.com",
  projectId: "mern-blog-8f035",
  storageBucket: "mern-blog-8f035.appspot.com",
  messagingSenderId: "736030375922",
  appId: "1:736030375922:web:89a0191f4a07814334f56b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);