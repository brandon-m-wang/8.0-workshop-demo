const countDisplay = document.getElementById("count-display");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");

let count = 0;
addButton.addEventListener("click", () => {
  count += 1;
  countDisplay.innerHTML = count;
});
subtractButton.addEventListener("click", () => {
  count -= 1;
  countDisplay.innerHTML = count;
});

const taskName = document.getElementById("task-name");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const taskList = document.getElementById("tasks");

submitButton.addEventListener("click", () => {
  if (taskName.value != "") {
    const task = document.createElement("li");
    task.innerHTML = taskName.value;
    taskList.appendChild(task);
  }
});

clearButton.addEventListener("click", () => {
  taskList.replaceChildren();
  taskName.value = "";
});

taskName.addEventListener("input", () => {
  if (taskName.value == "Cal Hacks") {
    countDisplay.style.color = "steelblue";
  }
});
