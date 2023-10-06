import { Link } from 'react-router-dom';
import logo from '../../img/conan_exiles.jpg';
import Navbar from './Navbar';


import styles from './Header.module.css';

function Header() {
    return (

        <header>
            <div className={styles.headerImg}></div>
            <Navbar />
        </header>

    )
}

export default Header;