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
    let fullTranscript = "";
    
    for (let i = 0; i < event.results.length; i++) {
        const speechResult = event.results[i][0].transcript;
        fullTranscript += speechResult + ' ';
    }
    
    output.textContent = fullTranscript;
};

recognition.onerror = (event) => {
    console.error('Speech recognition error occurred: ', event.error);
};