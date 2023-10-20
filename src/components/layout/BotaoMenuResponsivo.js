import styles from './BotaoMenuResponsivo.module.css';
import {RiMenuAddLine} from 'react-icons/ri';

function BotaoMenuResponsivo() {
    return<button type='button' className={styles.menuBtn}><RiMenuAddLine/></button>
}

export default BotaoMenuResponsivo;