import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../database/firebase-config';
import { useRouter } from 'next/router';

const CheckAuth = () => {
  const [user, setUser] = useState({});
  const router = useRouter();

  // function to check if the user is logged in and display the user detail
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
    });
  }, []);
  return <div>{user && router.push('/')}</div>;
};

export default CheckAuth;
