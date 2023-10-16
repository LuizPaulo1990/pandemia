import BotaoItens from './components/BotaoItens';
import styles from './Itens.module.css';
import { GiSwordWound, GiCrocSword, GiMagicAxe, GiSharpAxe, GiSpearFeather, GiSpears, GiFlangedMace, GiSpikedMace, GiTwoHandedSword, GiChakram, GiWolverineClaws, GiDaggers,GiCrossedSwords, GiKatana, GiBroadDagger, GiBowArrow, GiAttachedShield } from 'react-icons/gi';


function Itens() {
    return (
        <div className={styles.contentItens}>
            <BotaoItens text='espada 1mão' emblema={<GiSwordWound />} />
            <BotaoItens text='espada curta' emblema={<GiTwoHandedSword />} />
            <BotaoItens text='espada 2mãos' emblema={<GiCrocSword />} />
            <BotaoItens text='machado 1mão' emblema={<GiMagicAxe />} />
            <BotaoItens text='machado 2mãos' emblema={<GiSharpAxe />} />
            <BotaoItens text='lança 1mão' emblema={<GiSpears />} />
            <BotaoItens text='lança 2mãos' emblema={<GiSpearFeather />} />
            <BotaoItens text='maça 1mão' emblema={<GiFlangedMace />} />
            <BotaoItens text='maça 2mãos' emblema={<GiSpikedMace />} />
            <BotaoItens  text='chakram 2mãos' emblema={<GiChakram/>}/>
            <BotaoItens text='garra 2mãos' emblema={<GiWolverineClaws/>}/>
            <BotaoItens text='adaga 2mãos' emblema={<GiDaggers/>}/>
            <BotaoItens text='machado/espada duplo(a)' emblema={<GiCrossedSwords/>}/>
            <BotaoItens text='katana' emblema={<GiKatana/>}/>
            <BotaoItens text='punhal perfurante 2mãos'emblema={<GiBroadDagger/>}/>
            <BotaoItens text='arco' emblema={<GiBowArrow/>}/>
            <BotaoItens text='escudo' emblema={<GiAttachedShield/>}/>
        </div>
    )
}

export default Itens;