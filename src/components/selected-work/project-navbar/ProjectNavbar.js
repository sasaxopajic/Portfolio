import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectNavbar.module.scss';
import Button from '../../button/Button';

const Navbar = ({ projects, activeProjectId, isProjectPage }) => {
    return (
        <ul className={`${styles.navbar} ${isProjectPage ? styles.shrinked : styles.projects}`}>
            {/* Conditionally render project links */}
            {!isProjectPage && projects.map(project => (
                <Link
                    to={`/projects/${project.name.toLowerCase()}`}
                    key={project.id}
                >
                    <li className={styles["project-container"]}>
                        <img src={project.images[0].imageUrl} alt={project.name} />
                        <div className={styles["text-container"]}>
                            <div className={styles.name}>{project.name}</div>
                            <div className={styles.description}>{project.description}</div>
                            <div className={styles.heading}>{project.heading}</div>
                            <div className={styles["contributions-container"]}>
                                {project.contributions.map((c, i) => (
                                    <div key={i} className={styles["contribution"]}>
                                        {c.name}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Button type="primary">Read case study</Button>
                            </div>
                        </div>
                    </li>
                </Link>
            ))}
            {isProjectPage && projects.map(project => (
                <Link
                    to={`/projects/${project.name.toLowerCase()}`}
                    key={project.id}
                    className={`${styles["navbar-name"]} ${project.name.toLowerCase() === activeProjectId ? styles.active : ''}`}
                >
                    {project.name}
                </Link>
            ))}
        </ul>
    );
};

export default Navbar;
