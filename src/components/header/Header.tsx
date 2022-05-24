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
             {  pageName === '/employee-list' ?
                 <Link to='/' onClick={() => setPageName('/')}>
                     <FontAwesomeIcon  icon={faUserPlus} className={styles.header_icon} />
                 </Link>
                    :
                 <Link to='/employee-list' onClick={() => setPageName('/employee-list')}>
                     <FontAwesomeIcon  icon={faUsers} className={styles.header_icon} />
                 </Link>
             }
             <Link to="/">
                 <h1>HRnet</h1>
             </Link>
         </header>
     )
}
export default Header; 