import styles from './../styles/Pagina.module.scss'
export default function Pagina(){
    return (
        <div>
            <h1>Pagina de exemplo</h1>
            <div className={styles.container}>
                <div className={styles.rooms}>
                    <div className={styles.infobar}>
                    </div>
                    <div className={styles.searchbar}>
                    </div>

                </div>

                <div className={styles.chat}>
                    <div className={styles.header}>
                    </div>

                </div>
            </div>
        </div>
    )
}