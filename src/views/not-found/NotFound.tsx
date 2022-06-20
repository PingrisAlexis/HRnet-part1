import React from 'react';
import styles from './NotFound.module.scss';

const NotFound:() => JSX.Element = () => {
    return (
        <main className={styles.NotFound_container}>
            <h2>404</h2>
            <p>This page does not exist.</p>
        </main>
    );
};
export default NotFound;