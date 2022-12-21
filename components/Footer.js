import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-[#343a3f] flex flex-col justify-evenly items-center h-32'>
      <div className='flex justify-evenly items-center w-40'>
        <AiFillTwitterCircle color='white' fontSize='40px' />
        <BsFacebook color='white' fontSize='35px' />
      </div>
      <div>
        <p className='text-gray-400 text-sm'>
          Copyright © Reading Tamu Samaj UK {new Date().getFullYear()} | All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
