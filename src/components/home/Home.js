import Carousel from '../../components/carousel/Carousel';
import styles from './Home.module.scss';
import { ReactComponent as Planet } from '../../assets/planet.svg';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className={styles.container}>
            <Carousel />
            {/*      <div className={styles.decoration}>
                <Star className={`${styles.star} ${styles.stroke}`}></Star>
               
                <Star className={`${styles.star} ${styles.stroke}`}></Star>
            </div> */}
            <div className={styles["container-row"]}>
            <Planet className={`${styles["rotate-counterclockwise"]} ${styles.planet}`}></Planet>

                <div className={styles.welcome}>
                    {/* <div className={styles.heading}>
                        <div>Rocketing</div>
                        <div>your ideas</div>
                        <div>into universe</div>
                    </div> */}
                    <h1>Hi, I’m Saša! Welcome to my space!</h1>
                    <h1>I’m a Front-end developer and Web designer who enjoys turning ideas into real things. </h1>
                    <p>I focus on creating products that work well and make sense to users.
                   
                        Feel free to check out my work, and reach out if you have any questions or just want to chat!
                    </p>
                    <p>
                        <Link to="/about-me">Want to know more about me? <strong>Click here!</strong> </Link>
                    </p>
                </div>

                <Planet className={`${styles.rotate} ${styles.planet}`}></Planet>

            </div>

        </div>
    )
}