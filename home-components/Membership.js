import Link from 'next/link';
import React from 'react';

const Membership = () => {
  return (
    <div className='flex flex-col gap-2 border-2 rounded'>
      <div className='bg-blue-500 py-1 rounded'>
        <h1 className=' tracking-wider text-xl text-gray-50 font-extrabold text-center rounded'>
          MEMBERSHIP FORM
        </h1>
      </div>
      <div className='flex flex-col gap-5 p-2'>
        <p className='text-sm px-2'>
          If you are looking to join us and become a part of our organisation,
          we have provided a Life-Membership Registration form below. <br />
          <br /> Please print and complete the application form by filling in
          all the sections with your relevant details.
          <br />
          <br /> After completion you may contact any of our Key Members
          (available in "Contact us" page) and arrange for the hand-in of the
          form.
        </p>
        <hr />
        <p className='text-xs px-2'>
          To download{' '}
          <Link href='http://readingtamusamajuk.com/img/registration.pdf'>
            <a className='text-red-400'>click here</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Membership;
