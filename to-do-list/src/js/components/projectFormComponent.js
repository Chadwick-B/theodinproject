/** @param {Element} parent */
const projectFormComponent = parent => {
    const projectForm = document.createElement('form');
    projectForm.setAttribute('action', 'javascript:void(0);');
    projectForm.setAttribute('autocomplete', 'off');
    projectForm.innerHTML = `
        <legend class="text-center">New Project</legend>
        <div>
            <label for="title">Title</label><br>
            <input type="text" name="title" autofocus placeholder="My New Project">
        </div>
        <div class="text-center" style="margin-top: 5px"><button class="btn center" type="submit">Create</button></div>
    `

    parent.appendChild(projectForm);
    return projectForm;
}

export default projectFormComponent;