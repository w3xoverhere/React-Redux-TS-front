import React from 'react';
import {FC} from "react";
import styles from './Header.module.css'
const Header:FC = () => {
    return (
        <div className={styles.Header}>
            <img className={styles.Logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvEpSJbHvPPP3JsmaJAONEXdr5SrTcopviMtVXycq&s' alt='-'/>
        </div>
    );
};

export default Header;
