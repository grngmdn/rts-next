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
    <div className='min-h-[73vh] w-full flex flex-col justify-center items-center bg-gray-200'>
      <div>
        {!user && (
          <div>
            <h1 className='text-3xl font-bold pt-20 pb-5'>ADMIN LOGIN</h1>
          </div>
        )}
      </div>

      {/* Login form */}
      <div className='flex flex-col w-[400px] bg-white shadow-md rounded px-8 pt-6 mb-4'>
        {!user && (
          <div className=''>
            <div className='mb-4'>
              <label
                class='block text-gray-700 text-sm font-bold mb-2'
                for='username'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='mb-6'>
              <label
                class='block text-gray-700 text-sm font-bold mb-2'
                for='password'
              >
                Password
              </label>
              <input
                className='shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                type='password'
                placeholder='Password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
        )}

        {/* Login button for the form  */}
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

        {/* Loading text when loggin in  */}
        {loading && <p className='mt-10'>Loading...</p>}

        {/* Welcome text with users email, once logged in  */}
        <div className='flex flex-col pb-2 items-center'>
          <div className='pb-2 text-lg text-red-500'>
            {user && <span className='text-gray-600'>Hello,</span>}{' '}
            {user?.email}&nbsp;
          </div>
        </div>
      </div>

      {/* Renders admin dashboard once logged in */}
      {user && <AdminHome />}

      {/* Logout button once the user is already logged in  */}
      <div className='my-5 p-4'>
        {user && (
          <span className='inline-block align-baseline font-bold text-xl text-gray-600 '>
            Click here to Logout&nbsp;&nbsp;
          </span>
        )}
        {user && (
          <button
            type='submit'
            className='bg-red-500 px-4 py-1 text-white font-medium rounded hover:bg-red-600 rounded;'
            onClick={logout}
            disabled={loading || !user}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Admin;
