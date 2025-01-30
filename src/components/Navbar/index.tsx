'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [isOpen]);

  return (
    <div className={styles.nav}>
      <a href='#'>
        <img src='/logo.svg' alt='Logo' />
      </a>

      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>
            <a href=''>Pricing</a>
          </li>
          <li>
            <a href=''>Product</a>
          </li>
          <li>
            <a href=''>About Us</a>
          </li>
          <li>
            <a href=''>Careers</a>
          </li>
          <li>
            <a href=''>Community</a>
          </li>
        </ul>
      </div>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? '/icon-close.svg' : '/icon-hamburger.svg'}
          alt={isOpen ? 'Close Menu' : 'Open Menu'}
        />
      </button>
    </div>
  );
};

export default NavBar;
