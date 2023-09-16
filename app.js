var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var startBtn = document.getElementById("startBtn");
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function startTimer(){
    interval = setInterval(startStopwatch,10);
    startBtn.disabled = true;
}

function startStopwatch() {
    msec++;
    msecHeading.innerHTML = formatValue(msec);
    
    if (msec === 100) {
        sec++;
        secHeading.innerHTML = formatValue(sec);
        msec = 0;
        
        if (sec === 60) {
            min++;
            minHeading.innerHTML = formatValue(min);
            sec = 0;
        }
    }
}
function stopTimer(){
    clearInterval(interval);
    startBtn.disabled = false;
}
function resetTimer(){
    startBtn.disabled = false;
    stopTimer();
    min = '00';
    sec = '00';
    msec = '00';
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    
}
function formatValue(value) {
    return value < 10 ? `0${value}` : value;
}
