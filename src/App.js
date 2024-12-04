import { useRef } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import { useTodos } from './TodoContext';

function App() {

  const inputRef = useRef(null);
  const { add_Todo } = useTodos();

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
      <div>
        <h1>할일 적기</h1>
        <input
          type="test"
          placeholder='할일 ...'
          ref={inputRef}
          onKeyDown={active_Enter}
        >
        </input>
        <button onClick={handle_input}>추가</button>
      </div>
      <ToDoList />
    </div>
  );
}

export default App;
