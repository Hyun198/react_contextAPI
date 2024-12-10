import React, { useState } from 'react'
import useInterval from 'use-interval';
import { useTheme } from '../../utils/ButtonContext'
import Moment from 'react-moment';
import "./Header.style.css";
import { Link } from 'react-router-dom';

const today = new Date();

const format_date = `${today.getMonth() + 1}월 ${today.getDate()}일`


const Header = () => {
    const { theme, toggle_theme } = useTheme()
    const [now, setNow] = useState(Date.now())


    useInterval(() => {
        setNow(Date.now())
    }, 1000)

    return (
        <div className="header">
            <div style={{ "font-size": "2rem" }}><strong>{format_date}</strong></div>
            <Moment format={"HH:mm"} style={{ "font-size": "1.5rem" }}></Moment>
            <div className="header-container">
                <Link to="/">Home</Link>
                <Link to="/complete">Complete</Link>
            </div>
            <button className="theme-btn" onClick={() => toggle_theme()}>{theme === "dark" ? "Light" : "Dark"}</button>
        </div >


    )
}

export default Header