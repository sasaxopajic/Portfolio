import * as React from "react";
import "@fontsource/vt323"; // Defaults to weight 400
import styles from './Header.module.scss'

export default function Header() {
    return(
        <div className={styles.header}>
            <div>sasathepajic</div>
            <div>dsgn&dvlpmnt</div>
        </div>
    )
}