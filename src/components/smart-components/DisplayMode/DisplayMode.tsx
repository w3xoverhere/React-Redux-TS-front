import React from 'react';
import styles from './DisplayMode.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectDisplayMode, swapMode} from "../../../store/displaySlice";
import {TypedUseSelectorHook} from "react-redux";
import {RootState} from "../../../store/store";
const DisplayMode = () => {
    const dispatch = useDispatch();
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const mode = useTypedSelector(selectDisplayMode);
    const handleClick = () => {
        dispatch(
            swapMode()
        )
    }

    return (
        <>
            <div onClick={handleClick} className={styles.displayMode}>
                <img src={mode=="night"?"public/night.png":"public/day.svg"} alt="-"/>
            </div>
        </>
    );
};

export default DisplayMode;