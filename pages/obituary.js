import Image from 'next/image';
import React from 'react';

const Obituary = () => {
  return (
    <div>
      <h1>OBITUARY</h1>
      <div>
        <Image
          height={200}
          width={250}
          alt='obituary pictures'
          src='/order.jpg'
        />
        <h2>THULI GURUNG</h2>
        <hr />
        <h3>KASKI</h3>
        <p>Life member no: 218</p>
        <p>Date of Birth: N/A</p>
        <p>Passed away on: 01/10/2022</p>
      </div>
    </div>
  );
};

export default Obituary;
