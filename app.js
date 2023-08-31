var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var min = 0;
var sec = 0;
var msec = 0;
var interval;

function startTimer(){
    interval = setInterval(startStopwatch,10);
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
}
function resetTimer(){
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
