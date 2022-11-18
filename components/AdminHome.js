import React from 'react';
import { useRouter } from 'next/router';

const AdminHome = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <h1>Admin Home</h1>
      </div>
      <div>
        <button
          onClick={() => {
            router.push('/calendar/calendar-admin');
          }}
        >
          CALENDAR
        </button>
        <button
          onClick={() => {
            router.push('/obituary/obituary-admin');
          }}
        >
          OBITUARY
        </button>
        <button
          onClick={() => {
            router.push('/media/photo-admin');
          }}
        >
          PHOTO ALBUM
        </button>
        <button
          onClick={() => {
            router.push('/media/video-admin');
          }}
        >
          VIDEO
        </button>
        <button
          onClick={() => {
            router.push('/calendar/calendar-admin');
          }}
        >
          CALENDAR
        </button>
        <button
          onClick={() => {
            router.push('/members/advisors-admin');
          }}
        >
          ADVISOR MEMBERS
        </button>
        <button
          onClick={() => {
            router.push('/members/executiveMembers-admin');
          }}
        >
          EXECUTIVE MEMBERS
        </button>
        <button
          onClick={() => {
            router.push('/members/keyMembers-admin');
          }}
        >
          KEY MEMBERS
        </button>
        <button
          onClick={() => {
            router.push('/members/lifeMembers-admin');
          }}
        >
          LIFE MEMBERS
        </button>
        <button
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
