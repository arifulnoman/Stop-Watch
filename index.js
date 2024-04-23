let startTime = null;
let currentTime = 0;
let intervalId = null;

function updateDisplay() {
    const elapsedTime = currentTime + (startTime ? (Date.now() - startTime) : 0);
    const hours = Math.floor(elapsedTime / (3600 * 1000)).toString().padStart(2, "0");
    const minutes = Math.floor((elapsedTime / (60 * 1000)) % 60).toString().padStart(2, "0");
    const seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, "0");
    const milliseconds = Math.floor(elapsedTime % 1000).toString().padStart(3, "0");

    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    document.getElementById("watch").textContent = timeString;
}

function startStopwatch() {
    if (intervalId !== null) {
        return;
    }

    if (startTime === null) { 
        startTime = Date.now();
    } else { 
        startTime = Date.now() - currentTime;
    }

    intervalId = setInterval(updateDisplay, 10);
}

function stopStopwatch() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        currentTime += (Date.now() - startTime);
        startTime = null;
    }
}

function resetStopwatch() {
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    startTime = null;
    currentTime = 0;
    intervalId = null;
    updateDisplay();
}