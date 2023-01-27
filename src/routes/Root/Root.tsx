import React from 'react';
import {FC} from "react";
import {Outlet} from "react-router-dom";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/Navbar/Navbar";
import Footer from "../../components/UI/Footer/Footer";
import styles from "./Root.module.css"
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {selectTheme} from "../../store/displaySlice";


const Root:FC = () => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const theme = useTypedSelector(selectTheme);
    return (
        <>
            <div className={styles.Wrapper}>
                <Header className={styles.Header}/>
                <Navbar/>
                <div className={styles.Content} style={{backgroundColor: theme.secondColor, color: theme.mainFontColor}}>
                    <Outlet/>
                </div>
                <Footer className={styles.Footer}/>
            </div>
        </>
    );
};

export default Root;