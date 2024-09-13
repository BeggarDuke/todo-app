import { uniqueListeners } from "./listeners";

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
    addProjectsCards: function(projects) {
        const container = document.querySelector(".projects-list");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (let i=0; i<projects.length; i++) {
            let projectCard = Object.assign(document.createElement("div"),
            {className: `project project${i}`});
            projectCard.appendChild(Object.assign(document.createElement("h2"),
            {textContent: `${projects[i].name}`}));
            projectCard.appendChild(Object.assign(document.createElement("p"),
            {textContent: `${projects[i].tags}`}));
            projectCard.appendChild(Object.assign(document.createElement("button"),
            {textContent: "Add task", type: "button", className: "project-buttons add-task"}));
            projectCard.appendChild(Object.assign(document.createElement("button"),
            {textContent: "Remove project", type: "button", className: "project-buttons rm-project"}));
            document.querySelector(".projects-list").appendChild(projectCard);
            uniqueListeners.projectButtons(projectCard, projects[i]);
        }
    },
}