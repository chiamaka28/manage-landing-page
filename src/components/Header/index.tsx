import React from 'react';
import NavBar from '../Navbar';
import styles from '@/app/page.module.css';
import '../../app/page.module.css';
import Button from '../Button';
const Header = () => {
  return (
    <div>
      <div className={styles.backgroundContainer}>
        <div className={`${styles.bgPattern}  ${styles.bg1}`}></div>
        <div className={`${styles.bgPattern}  ${styles.bg2}`}></div>
      </div>
      <div className={` ${styles.container}`}>
        <NavBar />
        <div className={styles.header}>
          <div className={`${styles.center} ${styles.headerImage}`}>
            <img src='illustration-intro.svg' alt='' />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.headerText}>
              Bring everyone together to build better products.
            </h1>
            <p className={styles.paragraphText}>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className={`${styles.center} ${styles.left}`}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
