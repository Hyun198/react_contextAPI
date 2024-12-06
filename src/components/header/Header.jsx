import React, { useState } from 'react'
import useInterval from 'use-interval';
import { useTheme } from '../../ButtonContext'
import Moment from 'react-moment';
import "./Header.style.css";

const Header = () => {
    let date = new Date();
    const { theme, toggle_theme } = useTheme()

    const [now, setNow] = useState(Date.now())

    useInterval(() => {
        setNow(Date.now())
    }, 1000)

    return (
        <div className="header-container">
            <Moment format={"HH:mm:ss"} style={{ "font-size": "1.5rem" }}></Moment>
            <button onClick={() => toggle_theme()}>{theme}</button>
        </div>

    )
}

export default Header