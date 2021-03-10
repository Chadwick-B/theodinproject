/** @param {Element} parent */
const taskComponent = (task, parent) => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
        <div class="task-content">
            <h3>${task.title}</h3>
            ${task.description}
        </div>
        <div class="text-center">
            ${new Date(task.dueDate).toLocaleDateString()}
            <div>
                <button class="task-complete-btn btn" type="button">&#10004;</button>
                <button class="task-delete-btn btn" type="button">&#10006;</button>
            </div>
        </div>
    `

    if (task.priority === 'Important')
        taskElement.setAttribute('style', 'background-color: #f5dedc');

    if (task.completed)
        taskElement.classList.add('completed');
    
    parent.appendChild(taskElement);
    return taskElement;
}

export default taskComponent;