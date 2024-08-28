import React, { useEffect, useState } from 'react';
import styles from './ScrollProgressBar.module.scss'; // Create a corresponding CSS module file

const ScrollProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // Update scroll progress line
    const updateScrollLine = () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollHeight = documentHeight - viewportHeight;
        const percentage = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(percentage);
    };

    useEffect(function scrollProgressBar() {
        window.addEventListener('scroll', updateScrollLine);
        return () => window.removeEventListener('scroll', updateScrollLine);
    }, []);

    return (
        <div className={styles['scroll-line-wrapper']}>
            <div 
                className={styles['scroll-line']} 
                style={{ width: `${scrollPercentage}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;
