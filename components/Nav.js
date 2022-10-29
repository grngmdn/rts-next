import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Nav.module.css';

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{props.children}</ul>
    </nav>
  );
};

export const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navItem}>
      <Link href={props.link}>
        <a onClick={() => setOpen(!open)}>{props.icon}</a>
      </Link>
      {open && props.children}
    </li>
  );
};

export const DropDownMenu = (props) => {
  const DropDownItem = (props) => {
    return <>{props.children}</>;
  };
  return (
    <div>
      <DropDownItem>
        <Link href={`/members/${props.dropdownLink}`}>
          <a className={styles.dropdown}>{props.rts}</a>
        </Link>
      </DropDownItem>
    </div>
  );
};

export default Nav;
