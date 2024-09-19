import { uniqueListeners } from "./listeners";

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
            projectCard.appendChild(Object.assign(document.createElement("button"),
            {textContent: "Select Project", type: "button", className: "project-buttons select-project"}));
            document.querySelector(".projects-list").appendChild(projectCard);
            uniqueListeners.projectButtons(projectCard, projects[i], i);
        }
    },
}