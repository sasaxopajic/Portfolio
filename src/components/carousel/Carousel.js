import * as React from "react";
import styles from './Carousel.module.scss';

export default function Carousel() {
    return (
        <div className={styles.container}>
            <div className={styles["scrolling-text"]}>
                <div className={styles.text}>Aesthetics / Functionality / Seamless User-Experience</div>
            </div>
        </div>

    )
}