import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from 'firebase/firestore/lite';

const CalendarAdmin = () => {
  const [event, setEvent] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [newDate, setNewDate] = useState('');
  const usersCollectionRef = collection(db, 'calendar');

  useEffect(() => {
    const getEvent = async () => {
      const res = await getDocs(usersCollectionRef);
      setEvent(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEvent();
  }, []);

  const createNewEvent = async () => {
    await addDoc(usersCollectionRef, { event: newEvent, date: newDate });
    window.location.reload(true);
  };

  const deleteNewEvent = async (id) => {
    const userDoc = doc(db, 'calendar', id);
    await deleteDoc(userDoc);
    window.location.reload(true);
  };

  return (
    <div>
      <h1>Calendar Admin</h1>
      <input
        type='text'
        placeholder='Event Name'
        onChange={(event) => {
          setNewEvent(event.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Date'
        onChange={(event) => {
          setNewDate(event.target.value);
        }}
      />
      <button onClick={createNewEvent}>Add</button>
      {event.map((name) => {
        return (
          <div key={name.id}>
            <p>{name.event}</p>
            <p>{name.date}</p>
            <button
              onClick={() => {
                deleteNewEvent(name.id);
              }}
            >
              Delete Event
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarAdmin;
