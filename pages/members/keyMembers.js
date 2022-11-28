import React, { useEffect, useState } from 'react';
import MemberCard from '../../components/MemberCard';
import { db } from '../../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';

const KeyMembers = () => {
  const [members, setMembers] = useState([]);
  const getCollRef = collection(db, 'key_member');

  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(getCollRef);
      setMembers(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    newData();
  }, []);

  return (
    <div className='min-h-[73vh] w-full flex justify-center bg-gray-200'>
      <div className='max-w-[900px] w-[80vw] bg-gray-50 px-10 pt-10 pb-10'>
        <h1 className='text-3xl font-bold pb-10 text-blue-500'>Key Members</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-5'>
          {members.map((member) => {
            return (
              <MemberCard
                key={member.name}
                name={member.name}
                position={member.position}
                email={member.email}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyMembers;
