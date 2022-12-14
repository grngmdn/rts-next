import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';

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
    <div className='min-h-[86vh] w-full flex justify-center bg-gray-200'>
      <section className='max-w-[900px] w-[80vw] bg-gray-50 p-10'>
        <h1 className='text-3xl font-bold pb-10 text-blue-500'>
          UPCOMING EVENTS {new Date().getFullYear()}
        </h1>
        <div className='grid gap-2 grid-cols-6 pb-2'>
          <div className=' bg-blue-500 p-2 rounded col-span-2'>
            <h2 className='text-md text-gray-50 font-bold'>Date :</h2>
          </div>
          <div className='bg-blue-500 p-2 rounded col-span-4'>
            <h2 className='text-md text-gray-50 font-bold'>Event :</h2>
          </div>
        </div>
        {event.map((name) => {
          return (
            <div
              key={name.id}
              className='grid grid-cols-6 gap-2 odd:bg-gray-200 even:bg-gray-100'
            >
              <div className='px-2 py-5 col-span-2'>
                <h1 className='text-md text-blue-500'>{name.date}</h1>
              </div>
              <div className='px-2 py-5 col-span-4'>
                <h2 className='text-md'>{name.event.toUpperCase()}</h2>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Calendar;
