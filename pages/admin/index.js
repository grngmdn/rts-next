import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AdminHome from '../../components/AdminHome';
import { auth } from '../../database/firebase-config';
import styles from './Admin.module.css';

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
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      alert('error while logging out');
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        {!user && (
          <div>
            <h1>Admin Login</h1>
            <hr />
          </div>
        )}
      </div>
      <div>
        {!user && (
          <>
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
          </>
        )}
        {!user && (
          <button
            className={styles.primaryBtn}
            type='submit'
            onClick={login}
            disabled={loading || user}
          >
            Login
          </button>
        )}
      </div>
      <div>{loading && 'Loading...'}</div>
      <div>
        <h3>
          {user && <span>Hello </span>}
          {user?.email}
        </h3>
        {user && (
          <div>
            <button
              type='submit'
              className={styles.primaryBtn}
              onClick={logout}
              disabled={loading || !user}
            >
              Logout
            </button>
            <hr />
          </div>
        )}
      </div>
      {user && <AdminHome />}
    </div>
  );
};

export default Admin;
