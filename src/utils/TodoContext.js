import { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, SetTodos] = useState([])


    const add_Todo = (text, details) => {
        const now = new Date().toLocaleTimeString();

        SetTodos((prev) => [...prev, { text, createdAt: now, iscompleted: false, details }])
    }

    const toggle_completed = (index) => {
        SetTodos((prev) =>
            prev.map((todo, i) =>
                i === index ? { ...todo, completedAt: !todo.iscompleted ? new Date().toLocaleTimeString() : null, iscompleted: !todo.iscompleted } : todo
            )
        );
    }

    const toggle_delete = (index) => {
        SetTodos((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <ToDoContext.Provider value={{ todos, add_Todo, toggle_completed, toggle_delete }}>
            {children}
        </ToDoContext.Provider>
    )
}

export const useTodos = () => useContext(ToDoContext);