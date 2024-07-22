import styles from './Experience.module.scss'

export default function Experience() {
    return (
        <div>
            <div className={styles.experience}>
                <div className={styles.heading}>experience</div>
                <ul className={styles.grid}>
                    <li>Designed web-based platform that enabled sharing and combining digital assets, models and tools, in an IP-protected and access-controlled way.</li>
                    <li>Developed a barbershop website to streamline appointment scheduling, which resulted in an increase in revenue.</li>
                    <li>Created engaging social media posts for a local sportswear brand that led to more organic reach and followers.</li>
                    <li>Designed custom banners and logos for Twitch streamers to enhance their channel branding and visual identity.</li>
                </ul>
            </div>
        </div>

    )
}