import AboutMe from '../about-me/AboutMe';
import Home from '../home/Home';
import Experience from '../experience/Experience';
import SelectedWork from '../selected-work/SelectedWork';
import Contact from '../contact/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Project from '../selected-work/project/Project';

export default function AppLayout() {
    /* const { isPending, error, data, isFetching } = useQuery({
      queryKey: ['projects'],
      queryFn: async () => {
        const response = await fetch(
          'http://localhost:3001/projects',
        )
        return await response.json()
      },
    })
  
    if (isPending) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
   */
    return (
      <div>
        <Navbar />
       
        <Routes>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path='home' element={<Home />} />
          <Route path='about-me' element={<AboutMe />} />
          <Route path='projects' element={<SelectedWork />}>
            <Route path=':id' element={<Project />} />
          </Route>
          <Route path='experience' element={<Experience />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    )
  
  }