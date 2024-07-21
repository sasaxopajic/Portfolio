import './App.css';
import './components/header/Header.css';
import './components/carousel/Carousel.css'
import AboutMe from './components/about-me/AboutMe';
import './components/about-me/AboutMe.css';
import Home from './components/home/Home'
import Experience from './components/experience/Experience';
import SelectedWork from './components/selected-work/SelectedWork';
import Contact from './components/contact/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>

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
