import React, {FC} from 'react';
import styles from './Footer.module.css'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {selectTheme} from "../../../store/displaySlice";

type IFooter = {
    className?: string,
}
const Footer:FC<IFooter> = (props) => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const theme = useTypedSelector(selectTheme);

    return (
        <>
            <div className={props.className}>
                <div className={styles.Footer} style={{backgroundColor: theme.mainColor}}>

                </div>
            </div>
        </>
    );
};

export default Footer;