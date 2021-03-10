import modalComponent from './components/modalComponent.js';
import projectFormComponent from './components/projectFormComponent.js';
import taskFormComponent from './components/taskFormComponent.js';
import taskComponent from './components/taskComponent.js';
import controller from './controller.js';

const view = {
    clearProjectList: () => {
        const range = document.createRange();
        range.selectNodeContents(document.getElementById('project-list'));
        range.deleteContents();
    },

    clearTaskList: () => {
        const range = document.createRange();
        range.selectNodeContents(document.getElementById('task-list'));
        range.deleteContents();
    },

    populateProjectList: projects => {
        view.clearProjectList();
        const projectList = document.getElementById('project-list');

        const projectListHeader = document.createElement('li');
        projectListHeader.innerHTML = '<h1>Projects</h1>';
        projectList.appendChild(projectListHeader);

        for (const project of projects) {
            const listElement = document.createElement('li');

            const projectLink = document.createElement('a');
            projectLink.href = 'javascript:void(0);';
            projectLink.textContent = project.title;
            projectLink.addEventListener('click', () =>
                view.render(project), false);
            listElement.appendChild(projectLink)

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('x-btn');
            deleteButton.type = 'button';
            deleteButton.innerHTML = '&times;';
            deleteButton.addEventListener('click', () => 
                controller.deleteProject(project.id), false);
            listElement.appendChild(deleteButton);

            projectList.appendChild(listElement);
        }
    },

    render: project => {
        view.clearTaskList();

        const projectHeader = document.getElementById('project-title');
        projectHeader.setAttribute('data-id', project.id);
        projectHeader.textContent = project.title;

        if (project.tasks.length != 0) {
            const taskList = document.getElementById('task-list');

            project.tasks.sort((a, b) => {
                if (a.priority < b.priority) return 1;
                if (a.priority > b.priority) return -1;
                return new Date(a.dueDate) - new Date(b.dueDate);
            });

            for (const task of project.tasks) {
                const taskElement = taskComponent(task, taskList);
                taskElement.querySelector('.task-complete-btn').addEventListener('click', () =>
                    controller.completeTaskForProject(project.id, task.id), false);
                taskElement.querySelector('.task-delete-btn').addEventListener('click', () =>
                    controller.deleteTaskFromProject(project.id, task.id), false);
                taskElement.querySelector('.task-content').addEventListener('dblclick', () =>
                    view.createTaskEditForm(task), false);
            }
        }
    },

    createProjectForm: () => {
        const modal = modalComponent(document.body);
        const form = projectFormComponent(modal.querySelector('.modal-content'));
        form.addEventListener('submit', e => {
            e.preventDefault();
            controller.addProject(new FormData(form));
            modal.remove();
        });
    },

    createTaskEditForm: task => {
        const modal = modalComponent(document.body);
        const form = taskFormComponent(modal.querySelector('.modal-content'));

        const inputs = form.querySelectorAll('input');
        inputs[0].value = task.title;
        inputs[1].value = task.description;
        inputs[2].valueAsDate = new Date(task.dueDate);
        const prioritySelect = form.querySelector('select');
        prioritySelect.value = task.priority;


        form.addEventListener('submit', e => {
            e.preventDefault();
            const projectId = document.getElementById('project-title').getAttribute('data-id');
            controller.editTaskForProject(projectId, task.id, new FormData(form), task.completed);
            modal.remove();
        })
    },

    createTaskForm: () => {
        const modal = modalComponent(document.body);
        const form = taskFormComponent(modal.querySelector('.modal-content'));
        form.addEventListener('submit', e => {
            e.preventDefault();
            const projectId = document.getElementById('project-title').getAttribute('data-id');
            controller.addTaskToProject(projectId, new FormData(form));
            modal.remove();
        })
    }
}

export default view;