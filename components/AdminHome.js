import React from 'react';
import { useRouter } from 'next/router';
import styles from '../pages/admin/Admin.module.css';

const AdminHome = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col bg-white shadow-md rounded mb-4 max-w-[900px] w-[80vw]'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold pt-5 pb-5 text-blue-500'>
          Admin Home
        </h1>
      </div>
      <nav className='grid grid-cols-2 gap-10 p-5'>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/newpost');
          }}
        >
          NEW POST
        </button>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/obituary/obituary-admin');
          }}
        >
          OBITUARY
        </button>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/media/video-admin');
          }}
        >
          VIDEO
        </button>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/calendar/calendar-admin');
          }}
        >
          CALENDAR
        </button>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/members/advisors-admin');
          }}
        >
          ADVISOR MEMBERS
        </button>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/members/executiveMembers-admin');
          }}
        >
          EXECUTIVE MEMBERS
        </button>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/members/keyMembers-admin');
          }}
        >
          KEY MEMBERS
        </button>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/members/lifeMembers-admin');
          }}
        >
          LIFE MEMBERS
        </button>
        <button
          className={styles.adminBtn}
          onClick={() => {
            router.push('/members/ordinaryMembers-admin');
          }}
        >
          ORDINARY MEMBERS
        </button>
      </nav>
    </div>
  );
};

export default AdminHome;
