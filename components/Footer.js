import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
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
