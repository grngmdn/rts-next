import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore/lite';
import Link from 'next/link';

const Video = () => {
  const [videos, setVideos] = useState([]);
  const usersCollectionRef = collection(db, 'videos');

  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(usersCollectionRef);
      setVideos(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    newData();
  }, []);

  return (
    <div className='min-h-[73vh] w-full flex justify-center bg-gray-200'>
      <div className='max-w-[900px] w-[80vw] bg-gray-50 px-10 pt-10 pb-10'>
        <h1 className='text-3xl font-bold text-blue-500'>VIDEO GALLERY</h1>
        <div className='grid lg:grid-cols-2 md:grid-cols-1'>
          {videos.map((video) => {
            return (
              <div key={video.id} className='py-10'>
                <div>
                  <h1 className='text-lg font-bold pb-1'>
                    {video.name.toUpperCase()}
                  </h1>
                  <iframe
                    height='200'
                    src={video.url}
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Video;
