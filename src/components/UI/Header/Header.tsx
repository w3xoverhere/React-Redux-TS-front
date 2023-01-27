import React from 'react';
import {FC} from "react";
import styles from './Header.module.css'
import {Link} from "react-router-dom";

type IHeader = {
    className?: string,

}

import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {selectTheme} from "../../../store/displaySlice";


const Header: FC<IHeader> = (props) => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const theme = useTypedSelector(selectTheme);

    return (
        <div className={props.className}>
            <div className={styles.Header} style={{backgroundColor: theme.mainColor}}>
                <div className={styles.LeftPart}>
                    <img className={styles.Logo} src='./public/logo.png' alt='-'/>
                        <div className={styles.LogoHeader} style={{color: theme.secondFontColor}}>WardecWorkshop</div>
                </div>
                <div className={styles.Authentication}>
                    <Link className={styles.AuthLink} style={{color:theme.mainFontColor}} to='#'>Зайти</Link>
                    <Link className={styles.AuthLink} style={{color:theme.mainFontColor}} to='#'>Регистрация</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
