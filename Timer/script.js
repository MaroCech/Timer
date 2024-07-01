
const timerEl = document.getElementById("Timer");
const startBtnEl = document.getElementById("Start");
const stopBtnEl = document.getElementById("Stop");
const resetBtnEl = document.getElementById("Reset");

let startTime = 0
let elapsedTime = 0;
let timerInterval;


function startTimer() {
    startTime = Date.now() - elapsedTime
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime)
    },10)

    startBtnEl.disabled = true;
    stopBtnEl.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
  }
  function resetTimer() {
    clearInterval(timerInterval);
  
    elapsedTime = 0;
    timerEl.textContent = "00:00:00:00";
  
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
  }


function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}


startBtnEl.addEventListener("click", startTimer);
stopBtnEl.addEventListener("click", stopTimer);
resetBtnEl.addEventListener("click", resetTimer);











