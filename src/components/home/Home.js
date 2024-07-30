import Carousel from '../../components/carousel/Carousel';
import styles from './Home.module.scss';
import { ReactComponent as Planet } from '../../assets/planet.svg';
import { ReactComponent as Circle } from '../../assets/circle.svg';
import { ReactComponent as Star } from '../../assets/star.svg';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className={styles.container}>
            <Carousel />
            <div className={styles.decoration}>
                <Star className={`${styles.star} ${styles.stroke}`}></Star>
                <div className={styles.heading}>
                    <div>Rocketing</div>
                    <div>your ideas</div>
                    <div>into universe</div>
                </div>
                <Star className={`${styles.star} ${styles.stroke}`}></Star>
            </div>
            <div className={styles["container-row"]}>
                <div className={styles.welcome}>
                    <h1>Hi, I’m Saša!</h1>
                    <h2>Welcome to my space!</h2>
                    <p> I’m a <strong>Front-end developer and Web designer</strong> who enjoys turning ideas into real things. I focus on creating products that work well and make sense to users.
                    </p>
                    <p>
                        I like to dig into problems and find simple, effective solutions. My varied experiences help me approach projects from different angles.
                    </p>
                    <p>
                        Feel free to check out my work below, and reach out if you have any questions or just want to chat!
                    </p>
                    <p>
                        <Link to="/about-me">Want to know more about me? <strong>Click here!</strong> </Link>
                    </p>
                </div>

                <Planet className={`${styles.rotate} ${styles.stroke}`}></Planet>

            </div>

        </div>
    )
}