import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles['navbar']}>
            <div className={styles['nav']}>
                <div className={styles['logo']}>
                    <img src="/logo.png" />
                </div>
                <div className={styles['btns']}>
                    <div className={styles['login']}>
                        Login as Ninja
                    </div>
                    <div className={styles['login']}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}