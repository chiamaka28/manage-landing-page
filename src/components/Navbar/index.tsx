import React from 'react';
import styles from '@/app/page.module.css';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <a href='#'>
        <img src='/logo.svg' alt='Logo' />
      </a>
      <div>
        <img src='icon-hamburger.svg' alt='Hamburger icon' />
      </div>
    </div>
  );
};

export default NavBar;
