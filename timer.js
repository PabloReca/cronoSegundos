let seconds = 0;
let intervalId = null;

// Obtén los elementos del DOM
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
    // Comprueba si ya hay un intervalo en ejecución
    if(intervalId) {
        return; // Si hay un intervalo en ejecución, simplemente regresa y no hagas nada más
    }

    intervalId = setInterval(() => {
        seconds += 0.01;
        timerDisplay.textContent = ` ${seconds.toFixed(3)}`;
    }, 10);
}

function stopTimer() {
    if(intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    timerDisplay.textContent = ` ${seconds.toFixed(3)}`;
}

// Asignar funciones de inicio, detención y reinicio a los botones
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
