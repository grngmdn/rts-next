import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';
import DataTable from 'react-data-table-component';

const OrdinaryMembers = () => {
  // stores the initial data on page load
  const [users, setUsers] = useState([]);
  // stores the initial data on page load and then the filtered data when onChange is triggered
  const [filteredUsers, setFilteredUsers] = useState([]);
  // stores the searched data
  const [search, setSearch] = useState('');
  const getCollRef = collection(db, 'ordinary_member');

  // fetches the data when the page initially loads
  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(getCollRef);
      setUsers(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setFilteredUsers(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    newData();
  }, []);

  // filters the data when the user types in the input and the onChange is triggered
  // changes on the search state triggered the useEffect
  useEffect(() => {
    const result = users.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });

    setFilteredUsers(result);
  }, [search]);

  // heading or title for the table
  const columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Appointment',
      selector: (row) => row.appointment,
      sortable: true,
    },
    {
      name: 'Member No',
      selector: (row) => row.member_no,
      sortable: true,
    },
  ];

  //  Internally, customStyles will deep merges your customStyles with the default styling.
  const customStyles = {
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        backgroundColor: '#3B81F6',
        color: 'white',
        fontSize: '15px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  return (
    <div className='min-h-[73vh] w-full flex justify-center bg-gray-200'>
      <div className='max-w-[900px] w-[80vw] bg-gray-50 px-10 pt-10 pb-10'>
        <h1 className='text-3xl font-bold text-blue-500'>Ordinary Members</h1>
        <div className='pt-5'>
          <DataTable
            columns={columns}
            data={filteredUsers}
            pagination
            fixedHeader
            highlightOnHover
            customStyles={customStyles}
            subHeader
            subHeaderComponent={
              <input
                type='text'
                placeholder='Search members...'
                className='shadow border w-full h-7 text-sm px-3 text-gray-700 focus:outline-none focus:shadow-outline'
                // adds the typed value to the search state
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default OrdinaryMembers;
