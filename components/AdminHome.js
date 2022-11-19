import React from 'react';
import { useRouter } from 'next/router';
import styles from '../pages/admin/Admin.module.css';

const AdminHome = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <h1>Admin Home</h1>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default AdminHome;
