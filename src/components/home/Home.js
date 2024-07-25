import Header from "../../components/header/Header";
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import styles from './Home.module.scss';
import { ReactComponent as Icon } from '../../assets/planet.svg';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Carousel />
            <div className={styles.home}>
                <Icon className={styles.rotate}></Icon>
                <div className={styles.heading}>
                    <div>Rocketing</div>
                    <div>your ideas</div>
                    <div>into universe</div>
                </div>
                <Icon className={styles["rotate-counterclockwise"]}></Icon>
            </div>
            <Footer />
        </div>
    )
}