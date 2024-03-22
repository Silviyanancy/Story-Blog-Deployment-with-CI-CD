import React from 'react';
import {auth, provider} from "../firebase-config";
import { signInWithPopup } from 'firebase/auth'; 
//navigation between pages
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth}) => {
  let navigate = useNavigate();


  const signinwithGoogle = () => {
    //Firebase Authentication
    signInWithPopup(auth, provider).then((result) => {
      //local storage login
      localStorage.setItem("isAuth", true);
      setAuth(true);
      navigate("/");//navigate to home page
    });
  };



  return (
    <div className='loginpage'>
      <p>Sign In with Google to Continue Creating a Story</p>
      <button className='login-with-google-btn'onClick={signinwithGoogle}>Sign in with Google</button>
      Login
    </div>
  )
}

export default Login
