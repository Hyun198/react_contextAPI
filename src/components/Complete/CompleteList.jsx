import React from 'react'
import { useTodos } from '../../utils/TodoContext'
import './CompleteList.style.css'
const CompleteList = () => {

    const { todos, toggle_delete, details } = useTodos();

    if (todos.filter((todo) => todo.iscompleted).length === 0) {
        return <div>완료 목록이 없습니다 😅</div>
    }

    const complete_task = todos.filter((todo) => todo.iscompleted)

    return (
        <div className='complete-container'>
            <h2>완료 목록</h2>
            <p>COMPLETE: {complete_task.length}</p>
            {complete_task // 완료된 할 일만 필터링
                .map((todo, index) => (
                    <div className="todo" key={index}>
                        <div className="todo-detail">
                            <p key={index}><strong>{todo.text}</strong></p>
                            {todo.details && <small>{todo.details}</small>}
                        </div>

                        <button className="delete-btn" onClick={() => toggle_delete(index)}>
                            삭제
                        </button>
                    </div>
                ))}
        </div>
    )
}

export default CompleteList