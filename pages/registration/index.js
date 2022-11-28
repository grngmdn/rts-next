import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Registration = () => {
  return (
    <>
      <div className='min-h-[72vh] flex justify-center bg-gray-200'>
        <main className='max-w-[900px] w-[80vw] bg-gray-50 p-10'>
          <section className='mb-10'>
            <h1 className='text-3xl font-bold text-blue-500'>
              MEMBERSHIP FORM
            </h1>
            <p className='pt-10 pb-5'>
              If you are looking to join us and become a part of our
              organisation, we have provided a Membership Registration form
              below. Please print and complete the application form by filling
              in all the sections with your relevant details. After completion
              you may contact any of our Key Members (available in "Contact us"
              page) and arrange for the hand-in of the form. The Membership
              Joining fees are:
            </p>
            <ul className='mb-5'>
              <li className=''>Ordinary member: £30</li>
              <li className=''>Life member: £100 (For each person)</li>
            </ul>
            <p className='mb-5'>
              Click the image below to download the form or{' '}
              <Link href='http://readingtamusamajuk.com/img/registration.pdf'>
                <a className='text-red-500'>click here.</a>
              </Link>
            </p>
            <Link href='http://readingtamusamajuk.com/img/registration.pdf'>
              <a>
                <Image
                  alt='membership form'
                  height={300}
                  width={225}
                  src='/form.jpg'
                />
              </a>
            </Link>
          </section>
          <hr />
          <div className=''></div>
          <section className='mt-10'>
            <h3 className='font-bold mb-5 text-blue-500'>
              STANDING ORDER MANDATE
            </h3>
            <p className='mb-5'>
              Once you are a member of Reading Tamu Samaj UK, a monthly direct
              debit of £10 will be required as part of RTS SYORA.
            </p>
            <p className='mb-5'>
              Click the image below to download the Standing Order Mandate form
              or{' '}
              <Link href='http://readingtamusamajuk.com/img/registration2.pdf'>
                <a className='text-red-500'>click here.</a>
              </Link>
            </p>
            <Link href='http://readingtamusamajuk.com/img/registration2.pdf'>
              <a>
                <Image
                  height={300}
                  width={225}
                  alt='standing order mandate'
                  src='/order.jpg'
                />
              </a>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default Registration;
