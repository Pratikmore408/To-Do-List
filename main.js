const inputField = document.getElementById('todoInput');
const addButton = document.getElementById('addBtn');
const todoContainer = document.getElementById('todoList');
const taskCounter = document.getElementById('totalTasks');

let taskIdCounter = 0;

addButton.addEventListener('click', function() {
  const todoText = inputField.value.trim();
  if (todoText !== '') {
    const listItem = document.createElement('li');
    listItem.dataset.id = taskIdCounter++;
    listItem.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <span>${todoText}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button class="delete-btn">X</button>
    `;
    todoContainer.appendChild(listItem);
    inputField.value = '';
    updateTaskCounter();
  }
});

todoContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.remove();
    updateTaskCounter();
  } else if (event.target.classList.contains('task-checkbox')) {
    const taskText = event.target.nextElementSibling;
    taskText.classList.toggle('checked');
  }
});

function updateTaskCounter() {
  taskCounter.textContent = todoContainer.children.length;
}
