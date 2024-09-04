import { Project, Task, TextBlock } from "./core.js";

export function ui() {
    const mainContainer = Object.assign(document.createElement("div"), {className: "main-container"});

    const projectsContainer = Object.assign(document.createElement("div"), {className: "projects-container"});
    const projectsButtons = Object.assign(document.createElement("div"), {className: "projects-buttons"});
    const projectsList = Object.assign(document.createElement("div"), {className: "projects-list"});

    const taskContainer = Object.assign(document.createElement("div"), {className: "task-container"});
    const taskHeader = Object.assign(document.createElement("nav"), {className: "task-header"});
    const taskBoard = Object.assign(document.createElement("div"), {className: "task-board"});

    projectsButtons.appendChild(Object.assign(document.createElement("button"), {type: "button", textContent: "button"}));
    projectsContainer.appendChild(projectsButtons);
    projectsContainer.appendChild(projectsList);

    taskContainer.appendChild(taskHeader);
    taskContainer.appendChild(taskBoard);

    mainContainer.appendChild(projectsContainer);
    mainContainer.appendChild(taskContainer);
    
    document.querySelector("body").appendChild(mainContainer);
}

export const domMethods = {
    addNewProject: function() {
        const project = Object.assign(document.createElement("div"), 
        {className: `project project${Project.getProjectsList().length-1}`});

        project.appendChild(Object.assign(document.createElement("h4"), 
        {textContent: `${Project.getProjectsList()[Project.getProjectsList().length-1].name}`}));

        document.querySelector(".projects-list").appendChild(project);
    }
}