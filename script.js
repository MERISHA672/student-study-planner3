function addTask() {

    const taskInput = document.getElementById("taskInput");
    const subjectInput = document.getElementById("subjectInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value.trim();
    const subject = subjectInput.value;

    if (task === "" || subject === "") {
        alert("Please enter a task and select a subject.");
        return;
    }

    const taskElement = document.createElement("div");

    taskElement.className = "task";

    taskElement.innerHTML = `
        <strong>${task}</strong>
        <p>Subject: ${subject}</p>
    `;

    taskList.appendChild(taskElement);

    taskInput.value = "";
    subjectInput.value = "";
}
