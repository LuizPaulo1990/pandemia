import styles from './Tabelaprecos.module.css';

function TabelaPrecos(){
    return(
        <article className={styles.mainContent}>
            <h1 className={styles.mainTitle}>Tabela de Preços</h1>
            <h2 className={styles.subTitle}>Pets</h2>
            <p className={styles.content}> 2 pets = R$5,00.</p>
            <p className={styles.content}>5 pets = R$10,00.</p>
            <p className={styles.content}>Aranha Demoníaca = R$15,00 (apenas 1 por clã).</p>
            <h2 className={styles.subTitle}>Flechas</h2>
            <p className={styles.content}>mandibula atlach natch = R$1,00 (150 flechas).</p>
            <h2 className={styles.subTitle}>Armas</h2>
            <p className={styles.content}>exilio = R$1,00 (unidade).</p>
            <p className={styles.content}>siptha = R$1,50 (unidade).</p>
            <h2 className={styles.subTitle}>Armaduras</h2>
            <p className={styles.content}>peças lendárias = R$1,50 (unidade).</p>
            <p className={styles.content}>peças exilio = R$1,00(unidade).</p>
            <p className={styles.content}>peças siptah = R$1,50(unidade).</p>
            <p className={styles.content}><span className={styles.especialContent}>Promoção:</span> set completo de armadura(força, vida, carga ou agilidade + uma arma a escolha de brinde)= R$10,00.</p>
            <h2 className={styles.subTitle}>Ferramentas</h2>
            <p className={styles.content}>kit ferramentas sangue escuro = R$5,00.</p>
            <p className={styles.content}>peças individuais = R$1,00.</p>
            <h2 className={styles.subTitle}>Pergaminhos do Exilio</h2>
            <p className={styles.content}>R$1,00 por (unidade).</p>
            <h2 className={styles.subTitle}>Fragmento de Poder ou de Armadura</h2>
            <p className={styles.content}>R$5,00 por 100 fragmentos.</p>
            <h2 className={styles.subTitle}>Óleos Especiais</h2>
            <p className={styles.content}>R$2,00 por 10 unidades de cada tipo.</p>
            <h2 className={styles.subTitle}>Lacaios</h2>
            <p className={styles.content}>freke da selvageria, dalinsea das neves ou anja de derveux = R$5,00 por 2 lacaios.</p>
            <p className={styles.content}>lacaio de bancada t4 = R$2,00 cada.</p>
            <p className={styles.content}>emissário de tsathoggua, emissário de haon-der áriods, escolhido de sobek, protetor de prole issis e protetor da prole = R$3,00 cada ou dois por R$5,00.</p>
            <p className={styles.content}>demais lacaios nomeados = R$2,00 cada.</p>
            <p className={styles.content}>Observador dos Céus + kit de armadura do cavaleiro negro = R$20,00 (apenas 1 por clã).</p>
        </article>
    )
}

export default TabelaPrecos;