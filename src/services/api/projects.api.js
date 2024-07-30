import axios from 'axios';

// fetching projects from api using axios
export async function fetchProjects() {
  try {
    const response = await axios.get('http://localhost:3001/projects');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching projects');
  }
}

export const fetchProjectById = async (projectId) => {
    try {
      const projects = await fetchProjects();
      const project = projects.find(project => project.name.toLowerCase() == projectId.queryKey[1]);
      if (project) {
        return project;
      } else {
        throw new Error(`Project with id ${projectId} not found`);
      }
    } catch (error) {
      throw new Error(`Error fetching project with id ${projectId}`);
    }
  };