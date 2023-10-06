import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className={styles.navBar}>
             <ul className={styles.list}>
                    <li className={styles.itens}><Link to='/'>Home</Link></li>
                    <li className={styles.itens}><Link to='/itens'>Itens</Link></li>
                    <li className={styles.itens}><Link to='/pets'>Pets</Link></li>
                    <li className={styles.itens}><Link to='/lacaios'>Lacaios</Link></li>
                    <li className={styles.itens}><Link to='/contato'>Contato</Link></li>
                </ul>
        </nav>
    )
}

export default Navbar;