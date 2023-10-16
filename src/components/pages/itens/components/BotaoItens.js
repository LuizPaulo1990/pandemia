import { Link } from 'react-router-dom';
import styles from './BotaoItens.module.css';

function BotaoItens({ text, link, emblema }) {
    return (
        <button className={styles.botaoItens}>
            <Link to={link}>
                {text}
            </Link>
            <span>{emblema}</span>
        </button>
    )
}

export default BotaoItens;