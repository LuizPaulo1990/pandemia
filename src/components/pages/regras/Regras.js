import styles from './Regras.module.css';
import RegrasServidor from './components/RegrasServidor';

function Regras () {
    return(
        <section className={styles.regrasContent}>
           <RegrasServidor />
        </section>
    )
}

export default Regras;