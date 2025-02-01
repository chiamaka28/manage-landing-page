import React from 'react';
import styles from '@/app/page.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* <form action=''>
          <div>
            <input type='text' placeholder='Updates in your inbox…' />
          </div>
          <div>
            <button>Go</button>
          </div>
        </form> */}
        <div className={styles.link}>
          <div>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>Pricing</a>
              </li>
              <li>
                <a href='/'>Products</a>
              </li>
              <li>
                <a href='/'>About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href='/'>Careers</a>
              </li>
              <li>
                <a href='/'>Community</a>
              </li>
              <li>
                <a href='/'>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <div>
            <img src='icon-facebook.svg' alt='facebook' />
          </div>
          <div>
            <img src='icon-youtube.svg' alt='youtube' />
          </div>
          <div>
            <img src='icon-twitter.svg' alt='twitter' />
          </div>
          <div>
            <img src='icon-pinterest.svg' alt='pinterest' />
          </div>
          <div>
            <img src='icon-instagram.svg' alt='instagram' />
          </div>
        </div>
        <div className={styles.footerLogo}>
          <div>
            <img src='logo.svg' alt='logo' />
          </div>
          <div>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
