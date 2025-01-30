import React from 'react';
import styles from '@/app/page.module.css';
interface ButtonProps {
  color: string;
  backgroundColor: string;
}

const Button = () => {
  return (
    <div className={styles.button}>
      <a href='#'>Get Started</a>
    </div>
  );
};

export default Button;
