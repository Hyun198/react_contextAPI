import React from 'react'
import { useTheme } from '../../ButtonContext'
const Header = () => {
    const { theme, toggle_theme } = useTheme()

    return (
        <div>
            <button onClick={() => toggle_theme()}>{theme}</button>
        </div>

    )
}

export default Header