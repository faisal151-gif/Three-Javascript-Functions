# CSE 391 – Assignment 2: JavaScript Programming

**Student:** Faisal Rahman · BRAC University · Fall 2026

Three small web applications written with HTML, CSS and plain JavaScript (no libraries or frameworks).

| Page | Question | What it does |
| --- | --- | --- |
| `index.html` | Q1 – Fortune Generator (25) | Shows a random fortune from an array of 12 on every page load, in a centred box just above the footer. Four colour buttons beside the box change its font colour, background colour, border colour, font size and font family. |
| `stopwatch.html` | Q2 – Stopwatch (35) | Counts 0, 3, 6 … in steps of 3 seconds and stops by itself at 30. Start, Stop (pause) and Reset buttons; Start after Stop resumes from the last value. |
| `todo.html` | Q3 – To-Do List (40) | Add tasks from an input field, tick them off with a checkbox, delete them. Tasks are saved in `localStorage`, so they remain after a refresh or after closing the browser. |

## Files

```
Assignment 02/
├── index.html        Q1 page (also the home page)
├── stopwatch.html    Q2 page
├── todo.html         Q3 page
├── css/style.css     one stylesheet shared by all pages
├── js/fortune.js     Q1 logic
├── js/stopwatch.js   Q2 logic
├── js/todo.js        Q3 logic
└── README.md
```

## How to run

Open `index.html` in any modern browser (Chrome, Edge, Firefox). No installation is needed.
Use the menu at the top to move between the three pages.

## References

- MDN Web Docs – `Math.random()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- MDN Web Docs – `EventTarget.addEventListener()`: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- MDN Web Docs – `HTMLElement.style`: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
- MDN Web Docs – `setInterval()` / `clearInterval()`: https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
- MDN Web Docs – `Window.localStorage`: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- MDN Web Docs – `JSON.stringify()` / `JSON.parse()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
- MDN Web Docs – `Document.createElement()`: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
- MDN Web Docs – `Event.preventDefault()`: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
