import { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import Header from './components/header/Header';
import CompleteList from './components/Complete/CompleteList';
import { useTheme } from './utils/ButtonContext';
import { useTodos } from './utils/TodoContext';
import { Route, Routes } from 'react-router-dom';
import useSpeech from './hook/useSpeech';

function App() {

  const { transcript, listening, toggle_listening, resetTranscript } = useSpeech();
  const [inputValue, setInputValue] = useState("");
  const [detailValue, setDetailValue] = useState("");

  const { add_Todo } = useTodos();
  const { theme } = useTheme();


  useEffect(() => {
    if (listening) {
      setInputValue(transcript);

    }

  }, [transcript, listening]);



  const handle_input = () => {
    const todos = inputValue.trim();
    const todoDetails = detailValue.trim();
    if (todos.length > 0) {
      add_Todo(todos, todoDetails);
      setInputValue(""); // input 상태 초기화
      setDetailValue(""); // textarea 상태 초기화
    } else {
      alert("할 일을 입력하세요.");
    }
  };


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
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={active_Enter}
                  />
                  <button className="voice-btn" onClick={toggle_listening}>
                    {listening ? '⏸' : '▶'}
                  </button>


                  <textarea
                    placeholder='세부 사항...'
                    value={detailValue}
                    onChange={(e) => setDetailValue(e.target.value)}
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
