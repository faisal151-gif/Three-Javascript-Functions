/* =============================================================
   fortune.js: Question 1, Fortune Generator
   1. Store the fortunes in an array
   2. Pick one at random when the page loads and show it in the box
   3. Four colour buttons change the look of the box
   ============================================================= */


/* ---- 1. The list of fortunes (an array of strings) ---- */
const fortunes = [
  "True wisdom comes not from knowledge, but from understanding.",
  "A small step taken today saves a long walk tomorrow.",
  "Your hard work is about to pay off. Keep going!",
  "The bug you are hunting is closer than you think.",
  "A pleasant surprise is waiting for you this week.",
  "Patience turns a difficult problem into an easy lesson.",
  "Good things come to those who refresh the page.",
  "An old friend will bring you good news soon.",
  "Curiosity is the engine of every great idea.",
  "Today is a good day to learn something new.",
  "Your kindness will return to you in unexpected ways.",
  "Every expert was once a beginner."
];


/* ---- 2. Find the HTML element we want to change, using its id ---- */
const fortuneBox = document.getElementById("fortune-box");


/* ---- 3. Pick a random fortune and put it in the box ---- */
function showRandomFortune() {
  // Math.random() gives a decimal from 0 up to (but not including) 1.
  // Multiplying by the array length and rounding down with Math.floor()
  // turns it into a whole number from 0 to fortunes.length - 1.
  const randomIndex = Math.floor(Math.random() * fortunes.length);

  fortuneBox.textContent = fortunes[randomIndex];
}


/* ---- 4. Change the look of the box ----
   Every colour button calls this one function with its own values. */
function changeFortuneStyle(textColor, backgroundColor, borderColor, fontSize, fontFamily) {
  fortuneBox.style.color = textColor;                 // font colour of the text
  fortuneBox.style.backgroundColor = backgroundColor; // background colour of the box
  fortuneBox.style.borderColor = borderColor;         // border colour of the box
  fortuneBox.style.fontSize = fontSize;               // font size (changes slightly)
  fortuneBox.style.fontFamily = fontFamily;           // font family
}


/* ---- 5. Connect each button to the function above ----
   addEventListener("click", ...) means: "when this button is clicked, run this code". */
document.getElementById("green-button").addEventListener("click", function () {
  changeFortuneStyle("#1e4d12", "#e3f4dc", "#4e8c34", "20px", "Georgia, serif");
});

document.getElementById("yellow-button").addEventListener("click", function () {
  changeFortuneStyle("#c00000", "#ffd966", "#538135", "19px", "Calibri, 'Segoe UI', sans-serif");
});

document.getElementById("blue-button").addEventListener("click", function () {
  changeFortuneStyle("#1f3864", "#ddebf7", "#2e75b6", "18px", "'Trebuchet MS', sans-serif");
});

document.getElementById("orange-button").addEventListener("click", function () {
  changeFortuneStyle("#843c0c", "#fbe5d6", "#c55a11", "17px", "'Courier New', monospace");
});


/* ---- 6. When the page has finished loading, show a random fortune ---- */
window.addEventListener("load", showRandomFortune);
