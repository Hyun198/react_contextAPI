import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const useSpeech = () => {
    const { transcript, listening } = useSpeechRecognition();

    const toggle_listening = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            SpeechRecognition.startListening({ language: "ko-KR", continuous: true });
        }
    }
    return { transcript, listening, toggle_listening };
}

export default useSpeech;