import { useRef } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import Header from './components/header/Header';
import CompleteList from './components/Complete/CompleteList';
import { useTheme } from './utils/ButtonContext';
import { useTodos } from './utils/TodoContext';
import { Route, Routes } from 'react-router-dom';

function App() {

  const inputRef = useRef(null);
  const detailRef = useRef(null);
  const { add_Todo } = useTodos();
  const { theme } = useTheme();

  const handle_input = () => {
    const todos = inputRef.current.value;
    const todoDetails = detailRef.current.value;
    if (todos.length > 0) {
      add_Todo(todos, todoDetails)
      inputRef.current.value = "";
      detailRef.current.value = "";
    }
    else {
      alert("할일을 입력하세요.");
    }
  }

  const active_Enter = (e) => {
    if (e.key === "Enter") {
      handle_input();
    }
  }

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>To Do List😎✨</h1>
              <div className="input-form">
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="해야할 일..."
                    ref={inputRef}
                    onKeyDown={active_Enter}
                  />
                  <textarea
                    placeholder='세부 사항...'
                    ref={detailRef}
                  />
                </div>

                <button className="add-btn" onClick={handle_input}>추가</button>
              </div>
              <ToDoList />
            </>
          }
        />
        <Route path="/complete" element={<CompleteList />} />
      </Routes>

    </div>
  );
}

export default App;
