import React, {FunctionComponent, useState} from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Header:FunctionComponent = ():JSX.Element => {
    const pathName = window.location.pathname
    const [pageName, setPageName] = useState(pathName)

     return (
         <header className={styles.header_container}>
             {  pageName === '/employees' ?
                 <Link to='/' onClick={() => setPageName('/')}>
                     <FontAwesomeIcon  icon={faUserPlus} className={styles.header_icon} />
                 </Link>
                    :
                 <Link to='/employees' onClick={() => setPageName('/employees')}>
                     <FontAwesomeIcon  icon={faUsers} className={styles.header_icon} />
                 </Link>
             }

             <Link to="/">
                 <h1>HRNet</h1>
             </Link>
         </header>
     )
}
export default Header; 