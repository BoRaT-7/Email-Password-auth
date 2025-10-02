// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgmj6XJjuo5CrGVpmooM063XtDXpiOPxc",
  authDomain: "email-password-auth-e1f45.firebaseapp.com",
  projectId: "email-password-auth-e1f45",
  storageBucket: "email-password-auth-e1f45.firebasestorage.app",
  messagingSenderId: "1044740039213",
  appId: "1:1044740039213:web:839316e75a77120d0b8ea4",
  measurementId: "G-JH5FMFQWB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);