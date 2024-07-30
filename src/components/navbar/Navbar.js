import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const isProjectsActive = currentPath.startsWith('/projects');

    return (
        <div className={styles.container}>
            <nav >
                <ul>
                    <li className={currentPath === "/home" ? styles.active : ''}>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className={isProjectsActive ? styles.active : ''}>
                        <Link to="/projects">Projects</Link>
                    </li>
                   {/*  <li className={currentPath === "/experience" ? styles.active : ''}>
                        <Link to="/experience">Experience</Link>
                    </li> */}
                    <li className={currentPath === "/about-me" ? styles.active : ''}>
                        <Link to="/about-me">About me</Link>
                    </li>
                    <li className={currentPath === "/contact" ? styles.active : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
