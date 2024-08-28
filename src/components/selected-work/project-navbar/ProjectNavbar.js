import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectNavbar.module.scss';
import Button from '../../button/Button';

const ProjectNavbar = ({ projects, activeProjectId, isProjectPage }) => {
    return (
        <ul className={`${styles.navbar} ${styles.shrinked}`}>
            
            {projects.map(project => (
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

export default ProjectNavbar;
