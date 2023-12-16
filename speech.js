var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = true;

const output = document.querySelector(".output");
let isRecording = false;

document.getElementById('startRecognition').onclick = () => {
    if (!isRecording) {
        recognition.start();
        isRecording = true;
        console.log('Recording started');
    }
};

document.getElementById('stopRecording').onclick = () => {
    if (isRecording) {
        recognition.stop();
        isRecording = false;
        console.log('Recording stopped');
    }
};

recognition.onerror = (event) => {
    console.error('Speech recognition error occurred: ', event.error);
};
  
recognition.onend = () => {
    console.log('Speech recognition ended');
    isRecording = false; // Ensure the recording flag is updated on end
};