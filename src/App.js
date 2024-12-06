import { useRef } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ToDoList from './components/ToDoList/ToDoList';
import Header from './components/header/Header';
import { useTheme } from './ButtonContext';
import { useTodos } from './TodoContext';

function App() {

  const inputRef = useRef(null);
  const { add_Todo } = useTodos();
  const { theme } = useTheme();

  const handle_input = () => {
    const todos = inputRef.current.value;
    if (todos.length > 0) {
      add_Todo(todos)
      inputRef.current.value = "";
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
    <div className="App">
      <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
        <Header />
        <h1>To Do List😎✨</h1>
        <div className="input-form">
          <input
            type="test"
            placeholder='해야할 일...'
            ref={inputRef}
            onKeyDown={active_Enter}
          >
          </input>
          <button onClick={handle_input}>추가</button>
        </div>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
