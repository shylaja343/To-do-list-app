let tasks = [];

document.getElementById("add-task-btn").addEventListener("click", function () {
    const taskInput = document.getElementById("task-input").value;
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById("task-input").value = ''; // Clear input field after adding
        updateDropdown();
    }
});

function updateDropdown() {
    const dropdown = document.getElementById("task-list");
    dropdown.innerHTML = '<option value="">Select Task</option>';
    tasks.forEach((task, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = task;
        dropdown.appendChild(option);
    });
}

function loadSelectedTask() {
    const selectedIndex = document.getElementById("task-list").value;
    if (selectedIndex !== "") {
        document.getElementById("task-actions").style.display = "block";
    } else {
        document.getElementById("task-actions").style.display = "none";
    }
}

function editTask() {
    const selectedIndex = document.getElementById("task-list").value;
    if (selectedIndex !== "") {
        const newTask = prompt("Edit Task:", tasks[selectedIndex]);
        if (newTask) {
            tasks[selectedIndex] = newTask;
            updateDropdown();
        }
    }
}

function deleteTask() {
    const selectedIndex = document.getElementById("task-list").value;
    if (selectedIndex !== "") {
        if (confirm("Are you sure you want to delete this task?")) {
            tasks.splice(selectedIndex, 1);
            updateDropdown();
        }
    }
}
