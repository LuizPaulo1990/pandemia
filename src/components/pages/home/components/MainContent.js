
import { GiFire } from 'react-icons/gi';
import styles from './MainContent.module.css';

function MainContent() {
    return (
        <article className={styles.containerContent}>
            <h1 className={styles.mainTitle}>Bem vindo ao Pandemia <GiFire/> </h1>
            <h1 className={styles.mainSubTittle}>Ativo desde <span className={styles.creationDate}>2020</span></h1>
            <h2 className={styles.subTitle}>Bem-Vindos ao Reino Brutal de Conan Exiles!</h2>
            <p className={styles.content}>Seja muito bem-vindo(a) ao nosso servidor de Conan Exiles! Estamos empolgados em recebê-lo neste mundo brutal e desafiador, onde a sobrevivência é a chave para a glória. Este é o lugar onde você enfrentará os perigos da terra exilada de Hyboria, forjará alianças poderosas e moldará o seu próprio destino.</p>
            <h2 className={styles.subTitle}>Explore o Desconhecido</h2>
            <p className={styles.content}>Prepare-se para explorar terras desconhecidas, desde exuberantes selvas até desertos escaldantes, e descubra os segredos que Hyboria tem a oferecer. Cada canto deste mundo esconde riquezas e perigos, então esteja sempre alerta enquanto parte em sua jornada.</p>
            <h2 className={styles.subTitle}>Forje seu Destino</h2>
            <p className={styles.content}>Em Conan Exiles, você é o arquiteto do seu próprio destino. Construa fortalezas impenetráveis, crie armas mortais e treine aliados leais para enfrentar os desafios que surgirão. A liberdade está em suas mãos para escolher entre ser um bárbaro selvagem ou um governante astuto.</p>
            <h2 className={styles.subTitle}>Comunidade Unida</h2>
            <p className={styles.content}>Nossa comunidade é um grupo diversificado de jogadores apaixonados, e todos estão dispostos a ajudar os novos exilados. Se você tiver dúvidas, não hesite em perguntar no chat global. Estamos aqui para apoiar uns aos outros e criar uma experiência de jogo memorável.</p>
            <h2 className={styles.subTitle}>Seja Ético, Seja Honesto, Seja Lendário!</h2>
            <p className={styles.content}>Conan Exiles é um mundo onde a brutalidade reina, mas também um lugar onde a camaradagem e o respeito são altamente valorizados. Lembre-se de que estamos todos aqui para nos divertir e criar histórias épicas juntos. Portanto, aventure-se com coragem, faça amigos e forje lendas que serão lembradas por eras.</p>
            <p className={styles.content}>Mais uma vez, seja bem-vindo(a) ao <span className={styles.especialContent}>Pandora</span> de Conan Exiles! Prepare-se para uma jornada épica e desafiadora. Que a espada de Crom guie seus passos e que sua lenda seja cantada nos salões de Valhalla!</p>
            <h2 className={styles.subTitle}>Divirta-se e Conquiste, Exilado!</h2>
            <p className={styles.content}>
                Atenciosamente,

                Equipe de adm


            </p>
            
        </article>
    )
}

export default MainContent;