import styles from './SelectedWork.module.css'

export default function SelectedWork(){
    return(
        <div>
            <div className={styles.heading}>Selected work</div>
            <ul className={styles.grid}>
                <li>Gitworks</li>
                <li>barbershop</li>
                <li>movies</li>
                <li>zakazivko</li>
            </ul>
        </div>
    )
}