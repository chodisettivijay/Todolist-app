// Function to add a new task to the list
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var categorySelect = document.getElementById("categorySelect");
    var dateInput = document.getElementById("dateInput");
    var timeInput = document.getElementById("timeInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");

        // Clock icon for time button
        var timeBtn = document.createElement("span");
        timeBtn.classList.add("time-btn");
        timeBtn.addEventListener("click", function() {
            displayDateTime(li);
        });

        li.innerHTML = `<span class="task-text">${taskInput.value}</span> 
                        <span class="edit-btn" onclick="editTask(this)"></span>
                        <span class="delete-btn" onclick="deleteTask(this)"></span>`;
        li.appendChild(timeBtn);
        li.setAttribute("category", categorySelect.value);

        taskList.appendChild(li);
        taskInput.value = "";
        dateInput.value = ""; // Reset date input after adding task
        timeInput.value = ""; // Reset time input after adding task
    }
}

// Function to delete a task from the list
function deleteTask(spanElement) {
    var li = spanElement.parentElement;
    li.style.display = "none";
}

// Function to edit a task in the list
function editTask(spanElement) {
    var li = spanElement.parentElement;
    var taskText = li.querySelector(".task-text");

    var newText = prompt("Edit task:", taskText.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText;
    }
}

// Function to display date and time for a task
function displayDateTime(li) {
    var dateInput = document.getElementById("dateInput");
    var timeInput = document.getElementById("timeInput");

    if (dateInput.value.trim() !== "" && timeInput.value.trim() !== "") {
        var dateTimeSpan = document.createElement("span");
        dateTimeSpan.textContent = ` (${formatDateTime(dateInput.value, timeInput.value)})`;
        dateTimeSpan.style.color = "#2196F3"; // Blue color for date and time display
        li.querySelector(".task-text").appendChild(dateTimeSpan);
    }
}

// Function to format date and time
function formatDateTime(date, time) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDateTime = new Date(`${date}T${time}`).toLocaleDateString('en-US', options);
    return formattedDateTime;
}

// Function to reset input fields and task list
function resetFields() {
    document.getElementById("taskInput").value = "";
    document.getElementById("categorySelect").selectedIndex = 0;
    document.getElementById("dateInput").value = "";
    document.getElementById("timeInput").value = "";

    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
