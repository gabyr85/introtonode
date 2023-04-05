const inputTask = document.getElementById("input-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
	const taskText = inputTask.value;
	if (taskText !== "") {
		const taskItem = document.createElement("li");
		taskItem.className = "task-item";
		taskItem.innerHTML = `
		<span>${taskText}</span>
		<button class="delete-btn">Delete</button>
		`;
		taskList.appendChild(taskItem);
		inputTask.value = "";
		const deleteBtn = taskItem.querySelector
	