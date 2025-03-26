// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3830b.firebaseapp.com",
  projectId: "mern-blog-3830b",
  storageBucket: "mern-blog-3830b.firebasestorage.app",
  messagingSenderId: "531661034469",
  appId: "1:531661034469:web:f6436b88e4e5cda006550c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);