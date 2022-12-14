import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdArrowDropdown } from 'react-icons/io';

const BurgerMenu = () => {
  // State to toggle burger menu
  const [open, setOpen] = useState(true);
  const [membersMenu, setMembersMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);
  const [mediaMenu, setMediaMenu] = useState(false);

  return (
    <div className=''>
      <div className='text-gray-50 relative'>
        <GiHamburgerMenu
          className='text-2xl cursor-pointer'
          onClick={() => {
            setOpen(!open);
          }}
        />
        <nav
          className={`${
            !open ? 'block' : 'hidden'
          }  absolute top-5 left-0 bg-[#343a3f] w-full h-auto py-5 pl-3 flex flex-col text-gray-50 text-md gap-5`}
        >
          <Link href='/'>
            <a>Home</a>
          </Link>

          {/* Dropdown menu for Members nav */}
          <div className='' onClick={() => setMembersMenu(!membersMenu)}>
            <div>
              <Link href='#'>
                <a>
                  Members <IoMdArrowDropdown style={{ display: 'inline' }} />
                </a>
              </Link>
            </div>
            <div
              className={` ${
                membersMenu ? 'block' : 'hidden'
              } bg-gray-50 py-3 px-3 rounded flex gap-2 flex-col w-1/2 h-38`}
            >
              <Link href='/members/keyMembers'>
                <a className='text-gray-600'>Key Members</a>
              </Link>
              <Link href='/members/executiveMembers'>
                <a className='text-gray-600'>Executive Members</a>
              </Link>
              <Link href='/members/advisors'>
                <a className='text-gray-600'>Advisors</a>
              </Link>
              <Link href='/members/ordinaryMembers'>
                <a className='text-gray-600'>Ordinary Members</a>
              </Link>
              <Link href='/members/lifeMembers'>
                <a className='text-gray-600'>Life Members</a>
              </Link>
            </div>
          </div>

          {/* Dropdown menu for About nav */}
          <div onClick={() => setAboutMenu(!aboutMenu)}>
            <div>
              <Link href='#'>
                <a>
                  About us <IoMdArrowDropdown style={{ display: 'inline' }} />
                </a>
              </Link>
            </div>
            <div
              className={` ${
                aboutMenu ? 'block' : 'hidden'
              } bg-gray-50 py-3 px-3 rounded flex gap-2 flex-col w-1/2 h-38`}
            >
              <Link href='/about/identity'>
                <a className='text-gray-600'>Our Identity</a>
              </Link>
              <Link href='/about/constitution'>
                <a className='text-gray-600'>Constitution</a>
              </Link>
              <Link href='/about/legislation'>
                <a className='text-gray-600'>विधान</a>
              </Link>
            </div>
          </div>

          {/* Dropdown menu for Media nav */}
          <div onClick={() => setMediaMenu(!mediaMenu)}>
            <div>
              <Link href='#'>
                <a>
                  Media <IoMdArrowDropdown style={{ display: 'inline' }} />
                </a>
              </Link>
            </div>
            <div
              className={` ${
                mediaMenu ? 'block' : 'hidden'
              } bg-gray-50 py-3 px-3 rounded flex gap-2 flex-col w-1/2 h-38`}
            >
              <Link href='/media/photo'>
                <a className='text-gray-600 '>Photos</a>
              </Link>
              <Link href='/media/video'>
                <a className='text-gray-600'>Videos</a>
              </Link>
            </div>
          </div>

          <Link href='/calendar'>
            <a>Calendar</a>
          </Link>
          <Link href='/obituary'>
            <a>Obituary</a>
          </Link>
          <Link href='/registration'>
            <a>Registration</a>
          </Link>
          <Link href='/contact'>
            <a>Contact us</a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
