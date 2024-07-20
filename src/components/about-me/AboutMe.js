import * as React from "react";
import profilePhoto from '../../assets/profile-photo.png'

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="about-me-heading">
                <div>get</div><div>to</div><div>know</div><div>me!</div>
            </div>
            <div className="about-me-text">
                <div>Hi, my name is Saša and I am a 26-year-old web designer and front-end developer, dedicated to the art of crafting exceptional online experiences.</div>
                <div>Beyond the digital realm, I find joy and inspiration in various hobbies and interests. From immersing myself in the worlds of gaming to losing myself in the beats of electronic music, each pursuit fuels my creativity. When I'm not behind the screen, you can often find me exploring nature through hikes, constantly seeking new experiences to enrich my life and work.</div>
                <div>Currently, I'm working on my design skills using Figma while transitioning from a predominantly development-focused background. With previous expertise in building dynamic websites using Angular and React, I bring a unique perspective to my design process, ensuring that every pixel serves a purpose and every interaction enhances the user experience. My journey from development to design allows me to approach projects with a holistic understanding, seamlessly blending creativity with technical proficiency to deliver visually stunning and functional websites. Let's collaborate and bring your digital vision to life!</div>
            </div>
            <div className="about-me-image">
                <img src={profilePhoto}></img>
            </div>
        </div>
    )
}