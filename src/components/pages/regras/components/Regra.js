import styles from './Regra.module.css';

function Regra({text}) {
    return (
        <ol>
            <li className={styles.regra}>
                <h2>{text}</h2>

            </li>
        </ol>
    )
}

export default Regra;