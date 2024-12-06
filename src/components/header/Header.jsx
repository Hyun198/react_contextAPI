import React, { useState } from 'react'
import useInterval from 'use-interval';
import { useTheme } from '../../ButtonContext'
import Moment from 'react-moment';
import "./Header.style.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const { theme, toggle_theme } = useTheme()

    const [now, setNow] = useState(Date.now())

    useInterval(() => {
        setNow(Date.now())
    }, 1000)

    return (
        <div>
            <Moment format={"HH:mm:ss"} style={{ "font-size": "1.5rem" }}></Moment>
            <div className="header-container">
                <Link to="/">Home</Link>
                <Link to="/complete">Complete</Link>
            </div>
            <button onClick={() => toggle_theme()}>{theme}</button>
        </div>


    )
}

export default Header