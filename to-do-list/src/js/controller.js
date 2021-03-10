import model from './model.js';
import view from './view.js';

const controller = {
    init: () => {
        document.getElementById('new-project').addEventListener('click', () =>
            view.createProjectForm());
        document.getElementById('new-task').addEventListener('click', () =>
            view.createTaskForm());

        let initialRenderedProject;
        if (!model.projects.length) {
            initialRenderedProject = model.Project('Default Project');
            const task = model.Task(
                'Example Task',
                'Task Description',
                '3-7-2021',
                'Default',
                false);
            initialRenderedProject.tasks.push(task);
            model.projects.push(initialRenderedProject);
        } else {
            initialRenderedProject = model.projects[0];
        }

        window.addEventListener('beforeunload', () =>
            localStorage.setItem('projects', JSON.stringify(model.projects)));
        
        view.populateProjectList(model.projects);
        view.render(initialRenderedProject);
    },

    addProject: projectData => {
        const projectItem = model.Project(projectData.get('title'));
        model.projects.push(projectItem);

        view.populateProjectList(model.projects);
        view.render(projectItem);
    },

    deleteProject: projectId => {
        if (model.projects.length > 1) {
            const index = model.projects.findIndex(project => project.id === projectId);
            model.projects.splice(index, 1);

            view.populateProjectList(model.projects);

            if (document.getElementById('project-title').getAttribute('data-id') === projectId) {
                if (index < model.projects.length)
                    view.render(model.projects[index]);
                else
                    view.render(model.projects[index - 1]);
            }
        }
    },

    addTaskToProject: (projectId, taskData) => {
        const taskItem = model.Task(
            taskData.get('title'),
            taskData.get('description'),
            taskData.get('dueDate'),
            taskData.get('priority'),
            false);
        const project = model.projects.find(item => item.id === projectId);
        project.tasks.push(taskItem);

        view.render(project);
    },

    editTaskForProject: (projectId, taskId, taskData, taskIsCompleted) => {
        const project = model.projects.find(item => item.id === projectId);
        const index = project.tasks.findIndex(item => item.id === taskId);

        const taskItem = model.Task(
            taskData.get('title'),
            taskData.get('description'),
            taskData.get('dueDate'),
            taskData.get('priority'),
            taskIsCompleted);
        project.tasks.splice(index, 1, taskItem);

        view.render(project)
    },

    completeTaskForProject: (projectId, taskId) => {
        const project = model.projects.find(item => item.id === projectId);
        const task = project.tasks.find(item => item.id === taskId);
        task.completed = !task.completed

        view.render(project);
    },

    deleteTaskFromProject: (projectId, taskId) => {
        const project = model.projects.find(item => item.id === projectId);
        const index = project.tasks.findIndex(item => item.id === taskId);
        project.tasks.splice(index, 1);

        view.render(project);
    }
}

export default controller;