import React from 'react'
import { useTodos } from '../../TodoContext'

const Header = () => {

    const { todos } = useTodos();

    return (
        <div>Header</div>
    )
}

export default Header