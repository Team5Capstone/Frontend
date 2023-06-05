import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhldyhf6ssw-yuli5ZkD-oEuscKuCzlOs",
  authDomain: "a-social-387800.firebaseapp.com",
  projectId: "a-social-387800",
  storageBucket: "a-social-387800.appspot.com",
  messagingSenderId: "1026548385448",
  appId: "1:1026548385448:web:755e5cfa4fc94f6281649d",
  measurementId: "G-DF6DLJGRP8"
};

firebase.initializeApp(firebaseConfig);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User signed up:', userCredential.user);
     navigate('/profile')
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};


export default SignUp;