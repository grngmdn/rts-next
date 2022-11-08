import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../database/firebase-config';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  // function to check if the user is logged in and display the user detail
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
    });
  }, []);

  // function to login
  const login = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('Incorrect Login Details');
      console.log(error.message);
    }
    setLoading(false);
  };

  // function to logout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login} disabled={loading || user}>
          Login
        </button>
        <button onClick={logout} disabled={!user}>
          Logout
        </button>
      </div>
      <div>
        {loading && 'Loading...'}
        {user?.email}
      </div>
    </div>
  );
};

export default Admin;
