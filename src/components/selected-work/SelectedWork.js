import React, { useEffect } from 'react';
import { useProjectsQuery } from '../../services/queries/projects.query';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styles from './SelectedWork.module.scss';
import ScrollProgressBar from '../scroll-progress-bar/ScrollProgressBar';
import ProjectNavbar from '../selected-work/project-navbar/ProjectNavbar'

const SelectedWork = () => {
    const { data, isLoading, isError, error } = useProjectsQuery();
    const location = useLocation();
    const { projectId } = useParams();
    const isProjectPage = location.pathname.startsWith('/projects/');

    useEffect(() => {
        if (isProjectPage) {
            window.scrollTo(0, 0); // Scroll to the top of the page
        }
    }, [projectId, isProjectPage]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className={styles.container}>
            <ProjectNavbar
                projects={data}
                activeProjectId={projectId}
                isProjectPage={isProjectPage}
            />
            {isProjectPage && <ScrollProgressBar />}
            <Outlet />
        </div>
    );
};

export default SelectedWork;
