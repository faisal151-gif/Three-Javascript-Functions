/* todo.js: Question 3, To-Do List
   The "tasks" array holds the data. Every action does the same three steps:
   change the array -> saveTasks() -> showTasks() */

let tasks = [];  // each task is an object, e.g. { text: "Buy milk", completed: false }

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


/* ---- Saving and loading with localStorage ----
   localStorage can only store text, so JSON.stringify() turns the array into text,
   and JSON.parse() turns the text back into an array. */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");

  // getItem() returns null if nothing has been saved yet
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }

  showTasks();
}


/* ---- Changing the tasks ---- */
function addTask() {
  const text = taskInput.value.trim();  // trim() removes spaces at both ends

  // Ignore empty input
  if (text === "") {
    return;
  }

  tasks.push({ text: text, completed: false });  // add to the end of the array
  taskInput.value = "";                          // clear the input box
  saveTasks();
  showTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;  // true -> false, false -> true
  saveTasks();
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);  // remove 1 item at this position
  saveTasks();
  showTasks();
}


/* ---- Drawing the list: clear the <ul>, then build one <li> per task ---- */
function showTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    // Checkbox to mark the task as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
      toggleTask(index);
    });

    // The task text
    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.className = "done";  // CSS draws a line through completed tasks
    }

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}


// Add a task when the Add button is clicked
document.getElementById("add-button").addEventListener("click", addTask);

// When the page loads, show the saved tasks
window.addEventListener("load", loadTasks);
