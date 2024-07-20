import './App.css';
import Header from "./components/header/Header";
import './components/header/Header.css';
import Carousel from './components/carousel/Carousel';
import './components/carousel/Carousel.css'
import AboutMe from './components/about-me/AboutMe';
import './components/about-me/AboutMe.css';
import Experience from './components/experience/Experience';
import SelectedWork from './components/selected-work/SelectedWork';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="heading">
        <div>Rocketing</div>
        <div>your ideas</div>
        <div>into universe</div>
      </div>
      <AboutMe />
      <Experience/>
      <SelectedWork/>
      <Footer/>
    </div>

  );
}

export default App;
