import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.container}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/about-me">About me</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

    )
}