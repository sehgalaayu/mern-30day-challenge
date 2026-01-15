const input = document.querySelector("input");
const addButton = document.querySelector("button");
const taskList = document.querySelector(".task-list");

function createTask(taskText) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  deleteButton.addEventListener("click", () => {
    taskDiv.remove();
  });

  taskDiv.appendChild(taskParagraph);
  taskDiv.appendChild(deleteButton);

  return taskDiv;
}

addButton.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const taskItem = createTask(taskText);
  taskList.appendChild(taskItem);

  input.value = "";
});
