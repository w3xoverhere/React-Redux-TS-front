import React, {useState} from "react";
import {FC} from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import DisplayMode from "../../smart-components/DisplayMode/DisplayMode";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {selectTheme} from "../../../store/displaySlice";

type INavbar = {
    className?: string,

}
const Navbar:FC<INavbar> = (props) => {
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const theme = useTypedSelector(selectTheme);
    const [clicked, setClicked] = useState(false)
    
    const handleClick = () => {
        setClicked(!clicked);
    }


    return (
        <div className={props.className}>
            <div className={styles.Navbar}>
                <div className={clicked? styles.Btn + " " + styles.Rotate : styles.Btn}  onClick={handleClick} style={{backgroundColor: theme.mainColor}}>
                    <hr className={styles.HrLine} style={{backgroundColor: theme.secondColor}}></hr>
                    <hr className={styles.HrLine} style={{backgroundColor: theme.secondColor}}></hr>
                    <hr className={styles.HrLine} style={{backgroundColor: theme.secondColor}}></hr>
                </div>
                <div className={styles.Menu} style={clicked? {visibility: "visible",opacity: "100%", transition: "1s", backgroundColor: theme.thirdColor}:{visibility: "hidden", opacity: "0%", transition: "1s"}}>
                    <NavLink className={styles.Link} to="/" style={{color: theme.mainFontColor}}>Главная</NavLink>
                    <NavLink className={styles.Link} to="/catalog" style={{color: theme.mainFontColor}}>Каталог</NavLink>
                    <NavLink className={styles.Link} to="/about" style={{color: theme.mainFontColor}}>О нас</NavLink>
                    <NavLink className={styles.Link} to="/contacts" style={{color: theme.mainFontColor}}>Контакты</NavLink>
                    <NavLink className={styles.Link} to="/support" style={{color: theme.mainFontColor}}>Тех поддержка</NavLink>
                </div>
                <DisplayMode/>
            </div>
        </div>
    )

}


export default Navbar;