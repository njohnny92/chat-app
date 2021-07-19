import React from "react";
import firebase from 'firebase/app';
import GoogleButton from "react-google-button";

import { auth } from "../Firebase";

import "./Login.css";

const Login = () => {
  const signInHandler = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to my chat app!</h2>
        <div className="login-button">
          <GoogleButton onClick={signInHandler} />
        </div>
      </div>
    </div>
  );
};

export default Login;
