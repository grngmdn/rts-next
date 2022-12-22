import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { db } from '../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';
import Link from 'next/link';

const Events = () => {
  // stores the initial data on page load
  const [event, setEvent] = useState([]);
  const usersCollectionRef = collection(db, 'calendar');

  // fetches the data on page load
  useEffect(() => {
    const getEvent = async () => {
      const res = await getDocs(usersCollectionRef);
      setEvent(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvent();
  }, []);

  // heading or title for the table
  const columns = [
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'Event',
      selector: (row) => row.event,
      sortable: true,
    },
  ];

  //  Internally, customStyles will deep merges your customStyles with the default styling.
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#7d8993',
        color: 'white',
        fontSize: '15px',
        border: '1px solid #e2e2e2',
        borderRadius: '0.25rem',
      },
    },
    cells: {
      style: {
        border: '1px solid #e2e2e2',
      },
    },
  };

  return (
    <div className='flex flex-col gap-2 border-2 rounded'>
      <div className='bg-[#343a3f] py-1 rounded'>
        <h1 className='text-xl tracking-wider px-2 text-gray-50 font-extrabold text-center rounded'>
          UPCOMING EVENTS
        </h1>
      </div>
      <div className='flex flex-col gap-5 p-2 rounded'>
        <DataTable
          columns={columns}
          data={event.slice(0, 2)}
          fixedHeader
          highlightOnHover
          customStyles={customStyles}
        />
        <hr />
        <p className='text-xs text-gray-600'>
          For the full list of 2022 RTS events{' '}
          <Link href='/calendar'>
            <a className='text-red-400'>click here</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Events;
