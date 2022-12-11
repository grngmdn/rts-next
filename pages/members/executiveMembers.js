import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';
import MemberCard from '../../components/MemberCard';

const ExecutiveMembers = () => {
  const [users, setUsers] = useState([]);
  const getCollRef = collection(db, 'executive_member');

  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(getCollRef);
      setUsers(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    newData();
  }, []);

  return (
    <div className='min-h-[73vh] w-full flex justify-center bg-gray-200'>
      <div className='max-w-[900px] w-[80vw] bg-gray-50 px-10 pt-10 pb-10'>
        <h1 className='text-3xl font-bold pb-5 text-blue-500'>
          RTS 7th EXECUTIVE COMMITTEE MEMBERS
        </h1>
        <hr />
        <div className='pt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-10 gap-x-2'>
          {users.map((user) => {
            return (
              <MemberCard
                key={user.id}
                name={user.name}
                position={user.position}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveMembers;
