import Header from "../../components/header/Header";
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className={styles.heading}>
                <div>Rocketing</div>
                <div>your ideas</div>
                <div>into universe</div>
            </div>
            <Footer />

        </div>
    )
}