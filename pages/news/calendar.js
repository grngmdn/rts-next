import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';
import styles from './Calendar.module.css';

const Calendar = () => {
  const [event, setEvent] = useState([]);
  const usersCollectionRef = collection(db, 'calendar');

  useEffect(() => {
    const getEvent = async () => {
      const res = await getDocs(usersCollectionRef);
      setEvent(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvent();
  }, []);

  return (
    <div>
      <h1>UPCOMING EVENTS {new Date().getFullYear()}</h1>
      <div className={styles.header}>
        <h2>Date</h2>
        <h2>Event</h2>
      </div>
      {event.map((name) => {
        return (
          <div key={name.id} className={styles.body}>
            <h1>{name.date}</h1>
            <h2>{name.event}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
