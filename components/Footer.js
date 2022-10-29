import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <AiFillTwitterCircle />
        <BsFacebook />
      </div>
      <div>
        <p>
          Copyright © Reading Tamu Samaj UK {new Date().getFullYear()} | All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
