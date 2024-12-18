import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const useSpeech = () => {
    const { transcript, listening, resetTranscript } = useSpeechRecognition();

    const toggle_listening = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            resetTranscript();  // 여기서 이전 transcript 초기화
            SpeechRecognition.startListening({ language: "ko-KR", continuous: true });
        }
    }
    return { transcript, listening, toggle_listening, resetTranscript };
}

export default useSpeech;