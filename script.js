let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let startInterval = null;
let flag = false;

const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click", function () {
    if (!flag) {
        startTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    }
});

function startTimer() {
    if (timeBegan === null) timeBegan = new Date();

    if (timeStopped !== null) {
        stoppedDuration += new Date() - timeStopped;
    }

    startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds / 10);

    document.getElementById("timer-display").innerHTML =
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds) +
        ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}
