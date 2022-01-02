//window.speechRecognition =
//  window.speechRecognition || window.webkitSpeechRecognition;

let recognition = new webkitSpeechRecognition();

function speechStarts() {
  recognition.addEventListener("result", (e) => {
    console.log(e);
    let transcript = e.results[0][0].transcript;
    console.log(transcript);
    document.getElementById("output").innerText = transcript;
  });
  recognition.start();
}

function speechKeepStart() {
  recognition.addEventListener("result", (e) => {
    let transcript = e.results[0][0].transcript;
    document.getElementById("output").innerText = transcript;
    if (e.results[0][0].isFinal) {
      document.getElementById("output");
    }
  });
  recognition.addEventListener("end", recognition.start());
  // recognition.start();
}
