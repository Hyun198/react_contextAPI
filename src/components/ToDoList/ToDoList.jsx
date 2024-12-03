import React from 'react'
import { useTodos } from '../../TodoContext'

const ToDoList = () => {
    const { todos } = useTodos();
    return (
        <div>
            <h2>ToDoList</h2>
            {todos.map((todo, index) => (
                <p key={index}>{todo.text}</p>
            ))}
        </div>
    )
}

export default ToDoList