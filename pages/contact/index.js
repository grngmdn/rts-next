import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='min-h-[73vh] w-full flex justify-center bg-gray-200'>
      <div className='max-w-[900px] w-[80vw] bg-gray-50 px-10 pt-10 pb-10'>
        <h1 className='text-3xl font-extrabold text-blue-500'>GET IN TOUCH</h1>
        <div className='py-10'>
          <div>
            <p className='font-bold'>NANDA GURUNG - CHAIRMAN</p>
            <p>grgnanda@hotmail.co.uk</p>
            <p>+44 7799791053</p>
          </div>
          <div className='py-5'>
            <p className='font-bold'>DEV GURUNG - GENERAL SECRETARY</p>
            <p>devbahadur4073@gmail.com</p>
            <p>+44 7889541340</p>
          </div>
          <div>
            <p className='font-bold'>YAM GURUNG - TREASURER</p>
            <p>grgy687@yahoo.com</p>
            <p>+44 7795951321</p>
          </div>
        </div>
        <hr />
        <div className='py-10'>
          <h2 className='font-bold text-xl'>
            Want us to contact you? Fill out the form below with questions and
            we will get back to you as soon as possible!
          </h2>
          <form className='pt-10 flex flex-col'>
            <input
              className='shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Name'
            />
            <input
              className='shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Email Address'
            />
            <input
              className='shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Phone Number'
            />
            <textarea
              className='pb-5 shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              rows='5'
              placeholder='Message'
            />
            <button className='bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 max-w-[150px] rounded'>
              Send Message
            </button>
          </form>
        </div>
        <hr />
        <div className='pt-10 flex justify-center'>
          <div className='pr-10'>
            <Image width={120} height={150} src='/madan.jpg' />
          </div>
          <div>
            <h4 className='font-bold'>WEBSITE DEVELOPER</h4>
            <h5 className='font-bold text-sm pt-3'>MADAN GURUNG</h5>
            <h5 className='text-xs'>FRONT-END MEDIA & WEB DEVELOPER</h5>
            <h4 className=' text-xs font-bold pt-3'>CONTACT</h4>
            <ul className='text-xs'>
              <Link href='mailto:gurungmadan@hotmail.com'>
                <a>
                  <li className='text-red-400'>EMAIL</li>
                </a>
              </Link>
              <Link href='https://www.linkedin.com/in/madangurung/'>
                <a>
                  <li className='text-red-400'>LINKEDIN</li>
                </a>
              </Link>{' '}
              <Link href='https://www.madangurung.com/'>
                <a>
                  <li className='text-red-400'>WEBSITE</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
