import React, { FunctionComponent } from "react";
import styles from "./Footer.module.scss";

const Footer:FunctionComponent = ():JSX.Element => {
    return (
        <footer className={styles.footer_container}>
            <h3>Copyright, HRnet 2022</h3>
        </footer>
    )
}

export default Footer;