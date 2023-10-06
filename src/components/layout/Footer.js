import {Link} from 'react-router-dom';

import styles from './Footer.module.css';

import {FaDiscord} from 'react-icons/fa';

function Footer (){
    return(
        <footer>
           <ul>
            <li><Link><FaDiscord/></Link></li>
           </ul>
        </footer>
    )
}

export default Footer;