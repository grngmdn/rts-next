import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';

const Obituary = () => {
  const [name, setName] = useState([]);
  const newCollectionRef = collection(db, 'obituary');

  useEffect(() => {
    const newName = async () => {
      const res = await getDocs(newCollectionRef);
      setName(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    newName();
  }, []);

  return (
    <div className='min-h-[73vh] w-full flex justify-center bg-gray-200'>
      <div className='max-w-[900px] w-[80vw] bg-gray-50 px-10 pt-10 pb-10'>
        <h1 className='text-3xl font-bold pb-10 text-blue-500'>OBITUARY</h1>
        <div className='grid gap-y-10 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {name.map((people) => {
            return (
              <div
                className='max-w-[230px] border-gray-200 border-2 pt-3 flex flex-col items-center'
                key={people.id}
              >
                {/* Images of the Obituary */}
                <img alt={people.name} width='230px' src={people.url} />

                <div className='p-5'>
                  {/* Obituary Name */}
                  <p className='font-extrabold text-lg pb-2 text-blue-500'>
                    {people.name.toUpperCase()}
                  </p>
                  <hr />
                  {/* Obituary Address */}
                  <p className='text-md font-bold text-gray-700 py-3'>
                    {people.home.toUpperCase()}
                  </p>
                  {/* Obituary member no */}
                  <p className='text-sm text-gray-500 tracking-wide'>
                    <span className='text-gray-700'>Life member no:</span>{' '}
                    {people.memberNo}
                  </p>
                  {/* Obituary Date of birth  */}
                  <p className='text-sm text-gray-500 py-1 tracking-wide'>
                    <span className='text-gray-700'>Date of Birth:</span>{' '}
                    {people.dob ? people.dob : 'N/A'}
                  </p>
                  {/* Obituary Date of Death */}
                  <p className='text-sm text-gray-500 tracking-wide'>
                    <span className='text-gray-700'>Date of Death:</span>{' '}
                    {people.death}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Obituary;
