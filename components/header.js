import styles from './header.module.css'

const Header = ({buttonText, handleOnClick}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span>
                <span className={styles.title2}>Connoisseur</span>
            </h1>
            <p className={styles.subTitle}>Discover your local coffee shops!</p>
            <button className={styles.button} onClick={handleOnClick}>{buttonText}</button>
        </div>
    );
}

export default Header;