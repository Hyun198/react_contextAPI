import React from 'react'
import { useTodos } from '../../TodoContext'

const CompleteList = () => {

    const { todos, toggle_delete } = useTodos();


    return (
        <div>
            <h2>완료 목록</h2>

            {todos
                .filter((todo) => todo.iscompleted) // 완료된 할 일만 필터링
                .map((todo, index) => (
                    <div className="todo" key={index}>
                        <p>{todo.text}</p>
                        <button className="delete-btn" onClick={() => toggle_delete(index)}>
                            삭제
                        </button>
                    </div>
                ))}
        </div>
    )
}

export default CompleteList