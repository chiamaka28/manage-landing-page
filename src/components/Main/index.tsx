import React from 'react';
import styles from '@/app/page.module.css';
import Slider from '../Slider/Index';
import Cta from '../Cta';

const Main = () => {
  return (
    <>
      <div
        className={`${styles.container} ${styles.marginBottom} ${styles.main}`}
      >
        <div>
          <h3 className={styles.mainHeader}>
            What&apos;s different about Manage?
          </h3>
          <p className={styles.textCenter}>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className=''>
          <div>
            <div className={styles.flex}>
              <div className={styles.number}>01</div>
              <h4 className={styles.list}>Track company-wide progress</h4>
            </div>
            <p className={`${styles.textLeft} ${styles.listText}`}>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>

          <div>
            <div className={styles.flex}>
              <div className={styles.number}>02</div>
              <h4 className={styles.list}>Advanced built-in reports</h4>
            </div>
            <p className={`${styles.textLeft} ${styles.listText}`}>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div>
            <div className={styles.flex}>
              <div className={styles.number}>03</div>
              <h4 className={styles.list}>Everything you need in one place</h4>
            </div>
            <p className={`${styles.textLeft} ${styles.listText}`}>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
      <Slider />
      <Cta />
    </>
  );
};

export default Main;
