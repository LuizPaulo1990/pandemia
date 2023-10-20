import styles from './MenuLateral.module.css';
import Navbar from './Navbar';

function MenuLateral(){

    return(
        <div className={styles.menu}>
            <Navbar />
        </div>
    )
}

export default MenuLateral;