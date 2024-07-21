import Header from "../../components/header/Header";
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';



export default function Home() {
    return (
        <div>
            <Header />
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