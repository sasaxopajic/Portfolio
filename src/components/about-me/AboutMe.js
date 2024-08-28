import * as React from "react";
import profilePhoto from '../../assets/about-me-image.jpeg'
import styles from './AboutMe.module.scss';

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h3 >get to know me!</h3>
                <h1>
                    Hey, I’m Saša – Your Web Design and Development Partner
                </h1>
                <p>Born and raised in Serbia, currently located in Valencia, Spain. I am a 26-year-old web designer and front-end developer, dedicated to the art of crafting exceptional online experiences.</p>
                <br />
                <p>Beyond the digital realm, I find joy and inspiration in various hobbies and interests. From immersing myself in the worlds of gaming to losing myself in the beats of electronic music, each pursuit fuels my creativity. When I'm not behind the screen, you can often find me exploring nature through hikes, constantly seeking new experiences to enrich my life and work.</p>
                <br />
                <p>Currently, I'm working on my design skills using Figma while transitioning from a predominantly development-focused background. With previous expertise in building dynamic websites using Angular and React, I bring a unique perspective to my design process, ensuring that every pixel serves a purpose and every interaction enhances the user experience.</p>
                <br />
                <p> My journey from development to design allows me to approach projects with a holistic understanding, seamlessly blending creativity with technical proficiency to deliver visually stunning and functional websites.</p>
                <br />
                <p><strong>Let's collaborate and bring your digital vision to life!</strong></p>
            </div>

            <img className={styles["profile-photo"]} src={profilePhoto}></img>
        </div>

    )
}