import React, { useState, useEffect } from 'react';
import styles from './BackToTopButton.module.scss';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(function scrollToTopOnButtonClick() {
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={` ${styles["scroll-to-top-button"]} back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
