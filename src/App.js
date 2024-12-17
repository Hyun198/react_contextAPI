import { useRef, useState } from 'react';
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

  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef(null);

  const requestMicrophonePermission = async () => {
    try {
      // 마이크 권한 확인 및 요청
      await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log('마이크 권한 허용됨');
      return true; // 권한이 허용되면 true 반환
    } catch (error) {
      console.error('마이크 권한 거부됨: ', error);
      alert('마이크 권한이 필요합니다. 브라우저 설정을 확인해주세요.');
      return false; // 권한 거부 시 false 반환
    }
  };


  const startListening = async () => {

    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) return;

    if (!('webkitSpeechRecognition' in window)) {
      alert('음성 인식을 지원하지 않습니다.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript)
      inputRef.current.value = transcript
    }

    recognition.onend = () => {
      setIsListening(false);
      if (inputRef.current.value) {
        handle_input(); // 인식된 내용을 바로 추가
      }
    }
    recognition.onerror = (event) => {
      console.error('음성 인식 오류: ', event.error);
      setIsListening(false);
    }

  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }




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
                  <button onClick={isListening ? stopListening : startListening}>
                    {isListening ? "음성 인식 중지" : "음성 입력 시작 🎤"}
                  </button>
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
