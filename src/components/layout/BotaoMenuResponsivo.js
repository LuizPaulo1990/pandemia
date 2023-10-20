import styles from './BotaoMenuResponsivo.module.css';
import {GiLockedChest} from 'react-icons/gi';

function BotaoMenuResponsivo() {
    return<button type='button' className={styles.menuBtn}><GiLockedChest/></button>
}

export default BotaoMenuResponsivo;