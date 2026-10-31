/* =============================================================
   stopwatch.js: Question 2, Stopwatch
   - Counts in steps of 3 seconds: 0, 3, 6, 9 ... 30
   - Stops by itself at 30 seconds (only Reset can start it over)
   - Stop pauses it; Start resumes from the last time shown
   ============================================================= */


/* ---- 1. Settings that never change (const = cannot be reassigned) ---- */
const STEP = 3;    // seconds added on every tick
const LIMIT = 30;  // the stopwatch stops automatically at this value


/* ---- 2. Values that change while the page is open (let = can be reassigned) ---- */
let seconds = 0;      // the time currently shown on the display
let timerId = null;   // the id that setInterval gives back; null means "not running"


/* ---- 3. Find the HTML elements we need ---- */
const display = document.getElementById("time-display");
const statusText = document.getElementById("status");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");


/* ---- 4. Small helper functions ---- */

// Show the current value of "seconds" on the page
function updateDisplay() {
  display.textContent = seconds;
}

// Cancel the repeating timer so tick() is no longer called
function clearTimer() {
  clearInterval(timerId);
  timerId = null;
}

// setInterval runs this every 3 seconds while the stopwatch is running
function tick() {
  seconds = seconds + STEP;
  updateDisplay();

  // Reached the limit: stop automatically
  if (seconds >= LIMIT) {
    clearTimer();
    statusText.textContent = "Reached 30 seconds. Press Reset to start again.";
  }
}


/* ---- 5. What each button does ---- */

function startTimer() {
  // Already running? Ignore the click, otherwise a second timer would start
  // and the stopwatch would count twice as fast.
  if (timerId !== null) {
    return;
  }

  // Already at 30? The stopwatch must be reset first.
  if (seconds >= LIMIT) {
    statusText.textContent = "Already at 30 seconds. Press Reset first.";
    return;
  }

  // Call tick() every 3000 milliseconds (3 seconds).
  // "seconds" keeps its old value, so after a pause it resumes from there.
  timerId = setInterval(tick, STEP * 1000);
  statusText.textContent = "Running...";
}

function stopTimer() {
  // Nothing to stop if it is not running
  if (timerId === null) {
    return;
  }

  clearTimer();
  statusText.textContent = "Paused at " + seconds + " seconds. Press Start to resume.";
}

function resetTimer() {
  clearTimer();
  seconds = 0;
  updateDisplay();
  statusText.textContent = "Reset to 0. Press Start to begin.";
}


/* ---- 6. Connect the buttons to their functions ---- */
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
