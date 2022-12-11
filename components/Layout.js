import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
// import { NavItem } from './Nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
