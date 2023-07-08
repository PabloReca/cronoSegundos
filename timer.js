let seconds = 0;
let intervalId = null;

// Obtén los elementos del DOM
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

function startTimer() {
    intervalId = setInterval(() => {
        seconds += 0.01;
        timerDisplay.textContent = `Segundos transcurridos: ${seconds.toFixed(3)}`;
    }, 10);
}

function stopTimer() {
    if(intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// Asignar funciones de inicio y detención a los botones
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
