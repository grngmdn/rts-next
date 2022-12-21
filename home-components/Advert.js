import Image from 'next/image';
import React from 'react';
import advert1 from '../public/advert1.jpeg';
import advert2 from '../public/advert2.jpeg';
import advert3 from '../public/advert3.jpeg';
import advert4 from '../public/advert4.jpeg';
import advert5 from '../public/advert5.jpeg';

const Advert = () => {
  return (
    <div className='flex flex-col gap-2 border-2 rounded'>
      <div className='flex flex-col gap-5 p-2'>
        <Image src={advert1} alt='advert1' />
        <Image src={advert2} alt='advert2' />
        <Image src={advert3} alt='advert3' />
        <Image src={advert4} alt='advert4' />
        <Image src={advert5} alt='advert5' />
      </div>
    </div>
  );
};

export default Advert;
