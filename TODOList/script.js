// Массив объектов задач
let tasks = [
    { text: 'Task 1', status: 'incomplete' },
    { text: 'Task 2', status: 'complete' },
    { text: 'Task 3', status: 'incomplete' }
]; // зеленый означает задача завершена-красный означает задача не завершена

// Функция отображения списка задач на странице
function displayTasks() {
    let taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task.text;
        li.classList.add(task.status);
        
        li.addEventListener('click', () => {
            toggleTaskStatus(index); //при клике на задачу меняется статус
        });
        
        taskList.appendChild(li);
    });
}

// Функция добавления новой задачи
function addTask(text) {
    tasks.push({ text: text, status: 'incomplete' });
    displayTasks();
}

// Функция изменения статуса задачи
function toggleTaskStatus(index) {
    tasks[index].status = tasks[index].status === 'incomplete' ? 'complete' : 'incomplete';
    displayTasks();
}

// Функция удаления выбранных задач
function deleteTasks() {
    tasks = tasks.filter(task => task.status === 'incomplete');
    displayTasks();
}

// Функция сортировки задач по статусу
function sortTasks() {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
    displayTasks();
}

// Связывание HTML элементов с JavaScript функциями
document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let taskInput = document.getElementById('task-input');
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});

document.getElementById('sort-btn').addEventListener('click', sortTasks);

document.getElementById('clear-btn').addEventListener('click', deleteTasks);

// Инициализация отображения задач при загрузке страницы
displayTasks();