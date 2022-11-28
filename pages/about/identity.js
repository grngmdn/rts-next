import React from 'react';

const Identity = () => {
  return (
    <div className='min-h-[73vh] w-full flex justify-center bg-gray-200'>
      <div className='max-w-[900px] w-[80vw] bg-gray-50 px-10 pt-5 pb-20'>
        <h1 className='text-3xl font-extrabold pt-5 pb-10 text-blue-500'>
          READING TAMU SAMAJ UK | रेडिङ्ग तमु समाज बेलायत
        </h1>
        <img width='800px' src='http://readingtamusamajuk.com/img/gurung.jpg' />
        <h4 className='font-bold pt-10 pb-5 text-blue-500'>ABOUT US</h4>
        <p>
          Reading Tamu Samaj was formerly known as reading Tamu Dhee, initially
          established in 2003. In view of the growing number of Gurungs in
          Reading area and to accommodate them all into one umbrella, the Annual
          General Meeting held on 22 September 2012 unanimously decided to amend
          its name from "Reading Tamu Dhee" to "Reading Tamu Samaj". Reading
          Tamu Samaj (RTS) stands for all Gurungs from various parts of Nepal
          living in Reading and its surrounding area.
        </p>
        <p className='py-5'>
          Since its establishment in early 2003 the organizations aim has been
          to preserve Gurungs identity and promote its culture and traditional
          values.
        </p>
        <p>
          This website was created to help promote the organization in hopes of
          reaching a wider audience through the convenience of the internet. We
          hope to provide you with all the latest news and updates of all the
          organised RTS social events. Photos and videos of the various events
          will also be available for the community to view in this website.
        </p>
      </div>
    </div>
  );
};

export default Identity;
