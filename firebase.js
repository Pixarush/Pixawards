
// Import from CDN since you can’t use Node here
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDpg89P2oCcm7S_tlkP9xPYtqM2ZnD9pMw",
  authDomain: "pixawards-f1b58.firebaseapp.com",
  projectId: "pixawards-f1b58",
  storageBucket: "pixawards-f1b58.appspot.com",
  messagingSenderId: "366272534236",
  appId: "1:366272534236:web:5fd2a2ce79e694628f0619",
  measurementId: "G-83PLNBZ7FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
