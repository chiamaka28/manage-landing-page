import React from 'react';
import NavBar from '../Navbar';
import styles from '@/app/page.module.css';
import '../../app/page.module.css';
import Button from '../Button';
const Header = () => {
  return (
    <div>
      <div className={styles.bgMobile}>
        <NavBar />
        <div className={styles.center}>
          <img
            src='illustration-intro.svg'
            alt=''
            className='responsive'
            width='300px'
          />
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.headerText}>
          Bring everyone together to build better products.
        </h1>
        <p className={styles.paragraphText}>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
      </div>
      <div className={styles.center}>
        <Button />
      </div>
    </div>
  );
};

export default Header;
