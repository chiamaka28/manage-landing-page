import React from 'react';
import styles from '@/app/page.module.css';

const Cta = () => {
  return (
    <div className={`${styles.bgTablet} ${styles.cta} `}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div>
            <h2>Simplify how your team works today.</h2>
          </div>
          <div className={styles.center}>
            <div className={styles.ctaButton}>
              <a href='#'>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
