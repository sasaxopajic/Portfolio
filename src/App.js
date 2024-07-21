import './App.css';
import AboutMe from './components/about-me/AboutMe';
import Home from './components/home/Home'
import Experience from './components/experience/Experience';
import SelectedWork from './components/selected-work/SelectedWork';
import Contact from './components/contact/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<SelectedWork />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;
