import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdArrowDropdown } from 'react-icons/io';

const BurgerMenu = () => {
  // State to toggle burger menu
  const [open, setOpen] = useState(false);
  const [membersMenu, setMembersMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);
  const [mediaMenu, setMediaMenu] = useState(false);
  const navigationRef = useRef();
  const { pathname } = useRouter();

  // logic to handle clicking outside to close menu"
  useEffect(() => {
    // when user clicks outside the nav, fn below sets the open state to false and closes the nav bar
    const handleClickOutside = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navigationRef]);

  // logic to close navigation menu when user is routed to another page using the nav link
  useEffect(() => {
    setOpen(false); // Close the navigation panel
  }, [pathname]);

  return (
    <div className=''>
      <div className='text-gray-50 relative' ref={navigationRef}>
        {/* Hamburger menu icon  */}
        <GiHamburgerMenu
          className='text-3xl cursor-pointer'
          onClick={() => {
            setOpen((open) => !open);
          }}
        />

        {/* Navigation displayed when the Hamburger menu is clicked  */}
        <nav
          className={`${
            open ? 'block' : 'hidden'
          }  absolute top-9 left-0 bg-[#343a3f] w-full h-auto py-5 pl-3 flex flex-col text-gray-50 text-md gap-5 z-50`}
        >
          <Link href='/'>
            <a>Home</a>
          </Link>

          {/* Dropdown submenu for Members nav */}
          <div className=''>
            <div>
              <Link href='#'>
                <a onClick={() => setMembersMenu(!membersMenu)}>
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

          {/* Dropdown submenu for About nav */}
          <div>
            <div>
              <Link href='#'>
                <a onClick={() => setAboutMenu(!aboutMenu)}>
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

          {/* Dropdown submenu for Media nav */}
          <div>
            <div>
              <Link href='#'>
                <a onClick={() => setMediaMenu(!mediaMenu)}>
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
