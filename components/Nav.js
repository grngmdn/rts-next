import Link from 'next/link';
import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import BurgerMenu from './BurgerMenu';

const Nav = () => {
  return (
    <div
      className={`flex w-full justify-center items-center h-12 bg-[#343a3f]`}
    >
      {/* Burger Menu for mobile screen */}
      <div className='md:hidden w-[80vw]'>
        <BurgerMenu />
      </div>

      {/* Nav for desktop screen */}
      <nav className=' max-w-[900px] w-[80vw] hidden lg:block'>
        <div className='flex justify-around items-center font-extrabold text-gray-50 text-xs tracking-wider'>
          <Link href='/'>
            <a className=''>HOME</a>
          </Link>

          {/* Dropdown nav for Member, using css hover state  */}
          <div className='relative [&>div]:hover:block cursor-pointer'>
            <div className=''>
              <Link href='/members/keyMembers'>
                <a className=''>
                  MEMBERS&nbsp;
                  <IoMdArrowDropdown style={{ display: 'inline' }} />
                </a>
              </Link>
            </div>
            <div className='rounded hidden absolute bg-gray-50 min-w-[120px] border-[1px] border-gray-300 z-50 font-bold text-sm'>
              <Link href='/members/keyMembers'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Key Members
                </a>
              </Link>
              <Link href='/members/executiveMembers'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Executive Members
                </a>
              </Link>
              <Link href='/members/advisors'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Advisors
                </a>
              </Link>
              <Link href='/members/ordinaryMembers'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Ordinary Members
                </a>
              </Link>
              <Link href='/members/lifeMembers'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Life Members
                </a>
              </Link>
            </div>
          </div>

          {/* Dropdown nav for About Us, using css hover state  */}
          <div className='relative [&>div]:hover:block cursor-pointer'>
            <div className=''>
              <Link href='/about/identity'>
                <a className=''>
                  ABOUT US&nbsp;
                  <IoMdArrowDropdown style={{ display: 'inline' }} />
                </a>
              </Link>
            </div>
            <div className='rounded text-sm hidden absolute bg-gray-50 min-w-[80px] border-[1px] border-gray-300 z-50 font-bold'>
              <Link href='/about/identity'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Our Identity
                </a>
              </Link>
              <Link href='/about/constitution'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Constitution
                </a>
              </Link>
              <Link href='/about/legislation'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  विधान
                </a>
              </Link>
            </div>
          </div>

          {/* Dropdown nav for Media, using css hover state  */}
          <div className='relative [&>div]:hover:block cursor-pointer'>
            <div className=''>
              <Link href='/media/photo'>
                <a className=''>
                  MEDIA&nbsp;
                  <IoMdArrowDropdown style={{ display: 'inline' }} />
                </a>
              </Link>
            </div>
            <div className='rounded text-sm hidden absolute bg-gray-50 min-w-[80px] border-[1px] border-gray-300 z-50 font-bold'>
              <Link href='/media/photo'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Photos
                </a>
              </Link>
              <Link href='/media/video'>
                <a className='text-gray-700 py-3 px-2 block hover:bg-gray-200 text-center'>
                  Videos
                </a>
              </Link>
            </div>
          </div>

          <Link href='/calendar'>
            <a className=''>CALENDAR</a>
          </Link>
          <Link href='/obituary'>
            <a className=''>OBITUARY</a>
          </Link>
          <Link href='/registration'>
            <a className=''>REGISTRATION</a>
          </Link>
          <Link href='/contact'>
            <a className=''>CONTACT US</a>
          </Link>
          <Link href='/admin'>
            <a className=''>ADMIN</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
