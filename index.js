const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;
    taskItem.addEventListener("click", function () {
      taskItem.classList.toggle("completed");
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    addTask();
  }
});