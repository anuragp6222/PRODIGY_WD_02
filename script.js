let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateStopwatch, 1000);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    clearLapList();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function recordLap() {
    if (isRunning) {
        const lapList = document.getElementById('lapList');
        const lapTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
        const listItem = document.createElement('li');
        listItem.textContent = lapTime;
        lapList.appendChild(listItem);
    }
}

function clearLapList() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = '';
}
