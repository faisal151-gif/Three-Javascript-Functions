/* stopwatch.js: Question 2, Stopwatch
   Counts 0, 3, 6, 9 ... and stops automatically at 30 seconds.
   Stop pauses it, Start resumes from the last value, Reset goes back to 0. */

let seconds = 0;   // the time shown on the page
let timer = null;  // the id that setInterval gives back; null means "not running"

const display = document.getElementById("time-display");


// setInterval calls this every 3 seconds while the stopwatch is running
function tick() {
  seconds = seconds + 3;
  display.textContent = seconds;

  // Reached 30: stop automatically
  if (seconds >= 30) {
    stopTimer();
  }
}

function startTimer() {
  // Do nothing if it is already running (otherwise two timers would run and it would count twice as fast)
  // or if it is already at 30 (the user must press Reset first)
  if (timer !== null || seconds >= 30) {
    return;
  }

  // Call tick() every 3000 milliseconds (3 seconds).
  // "seconds" keeps its old value, so after Stop it resumes from there.
  timer = setInterval(tick, 3000);
}

function stopTimer() {
  clearInterval(timer);  // stop calling tick()
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  display.textContent = seconds;
}


// Connect each button to its function
document.getElementById("start-button").addEventListener("click", startTimer);
document.getElementById("stop-button").addEventListener("click", stopTimer);
document.getElementById("reset-button").addEventListener("click", resetTimer);
