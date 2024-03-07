var taskInput = document.getElementById("taskInput");
var tasksList = document.getElementById("tasksList");

// Function to add a task
function addTask() {
  // Get the task name from the input field
  var taskName = taskInput.value.trim();

  // Check if the task name is not empty
  if (taskName) {
    // Create a new list item element
    var listItem = document.createElement("li");

    // Create a new span element to display the task name
    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskName;

    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      removeTask(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(removeBtn);
    tasksList.appendChild(listItem);
    taskInput.value = "";
  }
}

function removeTask(taskItem) {
  tasksList.removeChild(taskItem);
}

var addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);
