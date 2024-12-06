import React from 'react'
import { useTodos } from '../../TodoContext'
import './ToDoList.style.css'
const ToDoList = () => {
    const { todos, toggle_completed, toggle_delete } = useTodos();


    return (
        <div className="todolist-container">
            <h2>ToDoList</h2>
            {todos.map((todo, index) => (
                <div className="todo">
                    <button className="complete-btn" onClick={() => toggle_completed(index)}>{todo.iscompleted ? "취소" : "완료"}</button>
                    <p key={index}>{todo.text}</p>
                    <button className="delete-btn" onClick={() => toggle_delete(index)}>삭제</button>
                </div>

            ))}
        </div>
    )
}

export default ToDoList