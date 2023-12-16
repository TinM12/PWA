var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.maxAlternatives = 1;
recognition.continuous = true;
recognition.interimResults = true;

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

recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    output.textContent = `You said: ${speechResult}`;
};

recognition.onerror = (event) => {
    console.error('Speech recognition error occurred: ', event.error);
};