// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//For Authentication
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
//For Firestore
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiN9hFJsZAYn6GtLB1p97_cei7C9mSHpo",
  authDomain: "devopsstoryapp.firebaseapp.com",
  projectId: "devopsstoryapp",
  storageBucket: "devopsstoryapp.appspot.com",
  messagingSenderId: "47525892527",
  appId: "1:47525892527:web:aeaf027693270fffb0df5a",
  measurementId: "G-75SNRY7GKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);  
export const auth = getAuth(app); 
export const provider =  new GoogleAuthProvider();
export const db = getFirestore(app);