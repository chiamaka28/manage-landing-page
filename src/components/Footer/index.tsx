'use client';
import React, { useState } from 'react';
import styles from '@/app/page.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      setEmail('');
      console.log(email);
      console.log('Email submitted:', email);
    } else {
      setError('Please enter a valid email address.');
    }
  };
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.emailInput}>
            <input
              type='text'
              placeholder='Updates in your inbox…'
              name=''
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <button>Go</button>
            </div>
          </div>
          <div className={styles.errorMessageContainer}>
            {error && <span className={styles.errorMessage}>{error}</span>}
          </div>
        </form>
        <div className={styles.link}>
          <div>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>Products</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>Community</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <div>
            <a href=''>
              <img src='icon-facebook.svg' alt='facebook' />
            </a>
          </div>
          <div>
            <a href=''>
              <img src='icon-youtube.svg' alt='youtube' />
            </a>
          </div>
          <div>
            <a href=''>
              <img src='icon-twitter.svg' alt='twitter' />
            </a>
          </div>
          <div>
            <a href=''>
              <img src='icon-pinterest.svg' alt='pinterest' />
            </a>
          </div>
          <div>
            <a href=''>
              <img src='icon-instagram.svg' alt='instagram' />
            </a>
          </div>
        </div>
        {/* <div className={styles.footerLogo}> */}
        <div className={styles.logo}>
          <img src='logo.svg' alt='logo' />
        </div>
        <div className={styles.copyRight}>
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
