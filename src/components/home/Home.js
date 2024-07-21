import Header from "../../components/header/Header";
import Carousel from '../../components/carousel/Carousel';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

import '../../components/header/Header.css';
import '../../components/carousel/Carousel.css'


export default function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <Carousel />
            <div className="heading">
                <div>Rocketing</div>
                <div>your ideas</div>
                <div>into universe</div>
            </div>
            <Footer />

        </div>
    )
}