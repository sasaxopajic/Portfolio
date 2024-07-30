import React from 'react';
import styles from './Button.module.scss';

const Button = ({ type, children }) => {
  const buttonClass = type === 'secondary' ? styles['btn-secondary'] : styles['btn-primary'];

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
