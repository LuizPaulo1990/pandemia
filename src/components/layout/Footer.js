import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

import { FaDiscord } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.logo}></div>
            <label>Link do discord</label>
            <button className={styles.btnDiscord}>
                <Link to="https://discord.gg/g6yqK2Ee" target="_blank"><FaDiscord /></Link>
            </button>
            <p className={styles.copyRight}>&copy; Luiz Paulo 2023</p>
        </footer>
    )
}

export default Footer;