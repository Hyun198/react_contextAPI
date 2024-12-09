import React from 'react'
import { useTodos } from '../../TodoContext'
import './ToDoList.style.css'
const ToDoList = () => {
    const { todos, toggle_completed, toggle_delete } = useTodos();


    return (
        <div className="todolist-container">
            <h2>ToDoList</h2>
            <p>{todos.length > 0 ? <p>{todos.length}개</p> : <p>오늘 해야할 일을 추가해주세요!</p>}</p>
            {todos.map((todo, index) => (
                <div className="todo">
                    <button className="complete-btn" onClick={() => toggle_completed(index)}>{todo.iscompleted ? "취소" : "완료"}</button>
                    <div className="todo-detail">
                        <p key={index}><strong>{todo.text}</strong></p>
                        {todo.details && <small>{todo.details}</small>}

                    </div>

                    <button className="delete-btn" onClick={() => toggle_delete(index)}>삭제</button>
                </div>

            ))}
        </div>
    )
}

export default ToDoList