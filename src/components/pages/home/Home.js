import styles from './Home.module.css';
import MainContent from './components/MainContent';

function Home () {
    return (
        <section className={styles.mainContent}>
           <MainContent/>
        </section>
    )
}

export default Home;