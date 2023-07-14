/// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add click event listener to the "Add" button
addTaskBtn.addEventListener('click', addTask);

// Add task to the UI when the "Add" button is clicked
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskTextElement = document.createElement('span');
        taskTextElement.classList.add('task-text');
        taskTextElement.textContent = taskText;

        const updateStatusButton = document.createElement('button');
        updateStatusButton.classList.add('update-status-btn');
        updateStatusButton.textContent = 'Update Status';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete Todo';

        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(updateStatusButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

// Update the status of the task
function updateStatus(event) {
    const taskItem = event.target.closest('.task-item');
    taskItem.classList.toggle('completed');
}

// Delete the task from the UI
function deleteTask(event) {
    const taskItem = event.target.closest('.task-item');
    taskItem.remove();
}

// Add event listeners for updating the status and deleting a task
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('update-status-btn')) {
        updateStatus(event);
    }

    if (event.target.classList.contains('delete-btn')) {
        deleteTask(event);
    }
});
