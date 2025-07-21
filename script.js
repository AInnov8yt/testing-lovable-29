document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-button');
  const tasksList = document.getElementById('tasks-list');

  // Function to create a new task item
  function createTaskItem(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
      tasksList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    return li;
  }

  // Event listener for adding a new task
  addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const taskItem = createTaskItem(taskText);
      tasksList.appendChild(taskItem);
      taskInput.value = '';
      taskInput.focus();
    }
  });

  // Allow adding tasks with Enter key
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTaskButton.click();
    }
  });
});