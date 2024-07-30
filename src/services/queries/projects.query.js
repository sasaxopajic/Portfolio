import { useQuery } from "@tanstack/react-query";
import { fetchProjects, fetchProjectById } from '../api/projects.api';

const PROJECTS_QUERY_KEY = 'projects';

// custom useQuery hook for querying projects using react-query
export function useProjectsQuery() {
    return useQuery({
        queryKey: [PROJECTS_QUERY_KEY],
        queryFn: fetchProjects
    });
}

export function useProjectByIdQuery(projectId) {
    return useQuery({ 
        queryKey: [PROJECTS_QUERY_KEY, projectId], 
        queryFn: fetchProjectById
    });
}
