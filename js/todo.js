/* =============================================================
   todo.js: Question 3, To-Do List
   - Add a task from the input field
   - Show every task in a list with a checkbox and a Delete button
   - Save the tasks in localStorage so they survive a refresh

   How it works: the "tasks" array is the single source of truth.
   Every action follows the same three steps:
     change the array  ->  saveTasks()  ->  renderTasks()
   ============================================================= */


/* ---- 1. The name our data is saved under in localStorage ---- */
const STORAGE_KEY = "cse391-todo-tasks";


/* ---- 2. The list of tasks. Each task is an object, for example:
          { text: "Buy milk", completed: false } ---- */
let tasks = [];


/* ---- 3. Find the HTML elements we need ---- */
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const emptyMessage = document.getElementById("empty-message");


/* ---- 4. Saving and loading with localStorage ----
   localStorage can only store text, so:
   JSON.stringify() turns the array into text before saving, and
   JSON.parse() turns that text back into an array when loading. */

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
  const savedText = localStorage.getItem(STORAGE_KEY);

  // getItem() returns null the very first time, when nothing is saved yet
  if (savedText !== null) {
    tasks = JSON.parse(savedText);
  }

  renderTasks();
}


/* ---- 5. Changing the tasks ---- */

function addTask(text) {
  tasks.push({ text: text, completed: false });  // push() adds to the end, like append() in Python
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  // Flip true -> false or false -> true ("!" means "not")
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);  // remove 1 item at this position, like pop(index) in Python
  saveTasks();
  renderTasks();
}


/* ---- 6. Drawing the list on the page ----
   Clear the <ul>, then build one <li> for every task in the array. */
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    // <li> that holds one task
    const item = document.createElement("li");
    if (task.completed) {
      item.classList.add("completed");  // CSS draws a line through completed tasks
    }

    // Checkbox to mark the task as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
      toggleTask(index);
    });

    // The task text. textContent shows it as plain text, so typing HTML tags does nothing harmful.
    const text = document.createElement("span");
    text.textContent = task.text;

    // Wrapping the checkbox and text in a <label> makes the text clickable too
    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(text);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-delete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });

    // Put the pieces together and add the <li> to the <ul>
    item.appendChild(label);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
  });

  updateSummary();
}

// Show "x of y tasks completed", or the empty message when there are no tasks
function updateSummary() {
  let completedCount = 0;
  for (const task of tasks) {
    if (task.completed) {
      completedCount = completedCount + 1;
    }
  }

  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
    taskCount.textContent = "";
  } else {
    emptyMessage.style.display = "none";
    taskCount.textContent = completedCount + " of " + tasks.length + " tasks completed";
  }
}


/* ---- 7. Adding a task when the form is submitted
          (clicking "Add Task" or pressing Enter in the input) ---- */
taskForm.addEventListener("submit", function (event) {
  // A form normally reloads the page when submitted; this stops that
  event.preventDefault();

  const text = taskInput.value.trim();  // trim() removes spaces at both ends, like strip() in Python

  // Ignore empty tasks
  if (text === "") {
    taskInput.focus();
    return;
  }

  addTask(text);
  taskInput.value = "";  // clear the input for the next task
  taskInput.focus();
});


/* ---- 8. When the page has finished loading, show the saved tasks ---- */
window.addEventListener("load", loadTasks);
