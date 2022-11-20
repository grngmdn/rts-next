import React from 'react';
import { useRouter } from 'next/router';
import styles from '../pages/admin/Admin.module.css';

const AdminHome = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center bg-white shadow-md rounded mb-4'>
      <div>
        <h1 className='text-4xl pt-5'>Admin Home</h1>
      </div>
      <nav className='grid grid-cols-2 gap-5 p-5'>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            router.push('/obituary/obituary-admin');
          }}
        >
          OBITUARY
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            router.push('/media/photo-admin');
          }}
        >
          PHOTO ALBUM
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            router.push('/media/video-admin');
          }}
        >
          VIDEO
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            router.push('/calendar/calendar-admin');
          }}
        >
          CALENDAR
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            router.push('/members/advisors-admin');
          }}
        >
          ADVISOR MEMBERS
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            router.push('/members/executiveMembers-admin');
          }}
        >
          EXECUTIVE MEMBERS
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            router.push('/members/keyMembers-admin');
          }}
        >
          KEY MEMBERS
        </button>
        <button
          className={styles.primaryBtn}
          onClick={() => {
            router.push('/members/lifeMembers-admin');
          }}
        >
          LIFE MEMBERS
        </button>
        <button
          className={styles.primaryBtn}
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
