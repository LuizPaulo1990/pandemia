import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import {GiCastle, GiSwordsEmblem, GiBrute, GiSlaveryWhip, GiBleedingEye, GiAngelWings, GiCoins} from 'react-icons/gi'

function Navbar(){
    return(
        <nav className={styles.navBar}>
             <ul className={styles.list}>
                    <li className={styles.itens}>
                        <Link to='/'>
                            Home 
                            <span> <GiCastle/></span>
                        </Link> 
                    </li>
                    <li className={styles.itens}>
                        <Link to='/precos'>
                            Preços
                            <span> <GiCoins/></span>
                        </Link>
                    </li>
                    <li className={styles.itens}>
                        <Link to='/itens'>
                            Itens
                            <span> <GiSwordsEmblem/></span>
                        </Link>
                    </li>
                    <li className={styles.itens}>
                        <Link to='/pets'>
                            Pets
                            <span> <GiBrute/></span>
                        </Link>
                    </li>
                    <li className={styles.itens}>
                        <Link to='/lacaios'>
                            Lacaios
                            <span> <GiSlaveryWhip/></span>
                            </Link>
                    </li>
                    <li className={styles.itens}>
                        <Link to='/contato'>
                            Contato
                           <span> <GiBleedingEye/></span>
                        </Link>
                    </li>
                    <li className={styles.itens}>
                        <Link to='/adm'>
                            ADM
                           <span>  <GiAngelWings/></span>
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;