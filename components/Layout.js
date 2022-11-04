import React from 'react';
import Footer from './Footer';
import Nav, { DropDownMenu } from './Nav';
import { NavItem } from './Nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav>
        <NavItem link='/' icon='HOME' />
        <NavItem link='/' icon='MEMBERS'>
          <DropDownMenu dropdownLink='keyMembers' rts='RTS Key Members' />
          <DropDownMenu
            dropdownLink='executiveMembers'
            rts='RTS Executive Members'
          />
          <DropDownMenu dropdownLink='advisors' rts='RTS Advisors' />
          <DropDownMenu
            dropdownLink='ordinaryMembers'
            rts='RTS Ordinary Members'
          />
          <DropDownMenu dropdownLink='lifeMembers' rts='RTS Life Members' />
        </NavItem>
        <NavItem link='/' icon='ABOUT US'>
          hello world
        </NavItem>
        <NavItem link='/media/photo' icon='MEDIA'>
          hello world
        </NavItem>
        <NavItem link='/calendar' icon='CALENDAR'>
          hello world
        </NavItem>
        <NavItem link='/obituary' icon='OBITUARY' />
        <NavItem link='/registration' icon='REGISTRATION' />
        <NavItem link='/contact' icon='CONTACT US' />
        <NavItem link='/admin' icon='ADMIN' />
      </Nav>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
