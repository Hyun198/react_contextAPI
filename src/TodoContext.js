import { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, SetTodos] = useState([])

    const add_Todo = (text) => {
        SetTodos((prev) => [...prev, { text }])
    }

    return (
        <ToDoContext.Provider value={{ todos, add_Todo }}>
            {children}
        </ToDoContext.Provider>
    )
}

export const useTodos = () => useContext(ToDoContext);