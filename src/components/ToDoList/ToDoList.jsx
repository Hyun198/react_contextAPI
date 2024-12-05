import React from 'react'
import { useTodos } from '../../TodoContext'
import './ToDoList.style.css'
const ToDoList = () => {
    const { todos, toggle_completed } = useTodos();
    return (
        <div className="todolist-container">
            <h2>ToDoList</h2>
            {todos.map((todo, index) => (
                <div className="todo">
                    <button onClick={() => toggle_completed(index)}>{todo.iscompleted ? "취소" : "완료"}</button>
                    <p key={index}>{todo.text}</p>
                </div>

            ))}
        </div>
    )
}

export default ToDoList