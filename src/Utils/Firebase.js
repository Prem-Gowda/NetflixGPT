// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBydeb4MzJVG8DTyOuG-YRGLSdTF8ImYE",
  authDomain: "netflixgpt-6ca20.firebaseapp.com",
  projectId: "netflixgpt-6ca20",
  storageBucket: "netflixgpt-6ca20.firebasestorage.app",
  messagingSenderId: "780810980043",
  appId: "1:780810980043:web:8af8d961d6ac61ee14e94e",
  measurementId: "G-6R8T7HZJWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();