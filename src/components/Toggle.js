import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Toggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const theme = darkMode ? "light" : "dark";
    const circleClickHandler = (theme) => {
        setDarkMode(!darkMode);
        document.documentElement.className = theme;
    };
    return (
        <div className='toggle-wrapper'>
            <div className='toggle' onClick={() => circleClickHandler(theme)}>
                <div>
                    <FontAwesomeIcon icon={faSun} className='sun' />
                </div>
                <div>
                    <FontAwesomeIcon icon={faMoon} className='moon' />
                </div>
                <div className={'circle ' + (darkMode ? 'circle--dark' : 'circle--light')}></div>
            </div>
        </div>
    );
};
export default Toggle;