import styles from './RegrasServidor.module.css';
import Regra from './Regra';
import Exemplo from './Exemplo';

function RegrasServidor() {
    return (
        <article>
            <h1>Regras Gerais do servidor</h1>
            <Regra text=' 1. NÃO SERÁ TOLERADO ofensa e comportamento tóxico.' />
            <Exemplo text='Ex: camperagem em bases, obeliscos e dungeons, mortes durante loading, atrapalhar Hecatombe de outros clãs.' />
            <Regra text=' 2. PROIBIDO construir em limbo, undermash, respaw de boss, livro ou fantasma de aprendizado e fechando algum caminho.' />
            <Exemplo text='Bases encontradas nessas condições ou bases irregulares (sem clã ou sem bandeira) serão removidas sem aviso prévio.' />
            <Regra text=' 3. É PERMITIDO pegar 1 kit inicial por player, no Navio de Boas-vindas Pandemia (localizado no F2). Solicitar kit especial para um ADM (1 por player).' />
            <Regra text=' 4. É OBRIGATÓRIO nomear e cadastrar o clã.' />
            <Regra text=' 5. É PROIBIDO jogar com mais de uma conta (chamada conta secundária).' />
            <Regra text=' 6. É PROIBIDO usar fogo-bruxo, possuir mais de 01 altar nível 03 e utilizar doma (provisório). Proibido usar avatar (deus).6.1. É permitido ter 5 rinocerontes por clã.' />
            <Regra text=' 7. Bases Deterioradas, sem nome de Clã ou com sistema de bandeiras irregular podem ser derrubadas por qualquer player.' />
            <Exemplo text='Faça um vídeo ou print comprovando a irregularidade antes de atacar.' />
            <Regra text='8. Roubo, saque ou furto são permitidos. A segurança e integridade da base e de seus itens são de total responsabilidade do clã.' />
            <Exemplo text='Atenção ao deslogar, pois o corpo do personagem permanece visível.' />
            <Regra text='9.  É OBRIGATÓRIO nomear o pet/lacaio com o nome do clã no final. ' />
            <Exemplo text='APENAS Lacaios / pets sem identificação e  lacaios protegendo longe do local de base poderão ser mortos e saqueados.
            Lacaios que estejam com status patrulhando ou voltando para casa não podem ser mortos'/>
            <Regra text='10. O PVP entre os players é permitido pelo mapa em qualquer dia ou horário da semana.' />
            <Exemplo text='EXCETO NO F2, NO NAVIO ADM E NAS ARENAS DE EVENTO
            DE ACORDO COM A REGRA 01.' />
            <Regra text=' 11. PERCA DE LOOT ATIVO AOS DOMINGOS.' />
            <Regra text=' 12. EVENTOS SEMANAIS' />
            <Exemplo text='Os eventos serão anunciados durante o dia, alternando entre eventos de estilo PvP e PvE. Entre no grupo da Psn "Servidor Pandemia Oficial" para participar da party do evento.' />
        </article>
    )
}

export default RegrasServidor;