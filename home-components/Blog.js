import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Blog1 from '../public/blog1.jpeg';
import { HiArrowSmRight } from 'react-icons/hi';
import { db } from '../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useRouter } from 'next/router';

const Blog = () => {
  const usersCollectionRef = collection(db, 'newpost');
  const [name, setName] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(usersCollectionRef);
      setName(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    newData();
  }, []);

  return (
    <>
      {name.map((people) => {
        return (
          <div className='border-[1px] rounded shadow mb-10' key={people.id}>
            <img src={people.url} width={500} alt='blog1' />
            <div className='p-5 flex flex-col gap-5'>
              <h1 className='text-3xl text-gray-800'>{people.title}</h1>
              <button
                onClick={() => {
                  router.push('/obituary');
                }}
                className='bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 max-w-[150px] rounded flex justify-center items-center'
              >
                READ MORE &nbsp;
                <HiArrowSmRight className='inline' />
              </button>
            </div>
            <div className='bg-gray-200 px-5 py-2'>
              <p className='text-gray-500 text-sm'>
                Posted on {people.date} by {people.name}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
