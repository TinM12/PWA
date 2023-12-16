var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition();
const diagnostic = document.querySelector(".output");

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.getElementById('startRecognition').onclick = () => {
    recognition.start();
    console.log('Recording started');
};

recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    diagnostic.textContent = `You said: ${speechResult}`;
};

// Handle errors
    recognition.onerror = (event) => {
    console.error('Speech recognition error occurred: ', event.error);
};

// Handle the end of speech recognition
    recognition.onend = () => {
    console.log('Speech recognition ended');
};