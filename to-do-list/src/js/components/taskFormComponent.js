/** @param {Element} parent */
const taskFormComponent = parent => {
    const taskForm = document.createElement('form');
    taskForm.setAttribute('action', 'javascript:void(0);');
    taskForm.setAttribute('autocomplete', 'off');
    taskForm.innerHTML = `
        <legend class="text-center">New Task</legend>
        <div>
            <label for="title">Title</label><br>
            <input type="text" name="title" autofocus placeholder="Go to the store">
        </div>
        <div>
            <label for="description">Description</label><br>
            <input type="text" name="description" placeholder="Buy thousands of cookies">
        </div>
        <div>
            <label for="dueDate">Due Date</label>
            <input type="date" name="dueDate"><br>
        </div>
        <div>
            <label for="priority">Priority</label>
            <select name="priority">
                <option value="Default">Default</option>
                <option value="Important">Important</option>
            </select><br>
        </div>
        <div class="text-center"><button class="btn" type="submit">Create</button></div>
    `

    parent.appendChild(taskForm);
    return taskForm;
}

export default taskFormComponent;