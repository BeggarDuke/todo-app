export function ui() {
    const projectsContainer = Object.assign(document.createElement("div"), {className: "projects-container"});
    const projectsButtons = Object.assign(document.createElement("div"), {className: "projects-buttons"});
    const projectsList = Object.assign(document.createElement("div"), {className: "projects-list"});
    const main = Object.assign(document.createElement("div"), {className: "main-container"});
    const mainHeader = Object.assign(document.createElement("nav"), {className: "main-header"});
    const taskBoard = Object.assign(document.createElement("div"), {className: "task-board"});
    projectsButtons.appendChild(Object.assign(document.createElement("button"), {type: "button", textContent: "button"}));
    projectsContainer.appendChild(projectsButtons);
    projectsContainer.appendChild(projectsList);
    main.appendChild(mainHeader);
    main.appendChild(taskBoard);
    document.querySelector("body").appendChild(projectsContainer);
    document.querySelector("body").appendChild(main);
}