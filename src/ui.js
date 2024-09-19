import { Project } from "./core";

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
            listeners.uniqueListeners.projectButtons(projectCard, projects[i], i);
        }
    },
}

export const listeners = {
  mainListeners: function() {
    document
      .querySelector(".projects-buttons > button:first-child")
      .addEventListener("click", function () {
        let name = prompt("name");
        if (name === null) return;
        let tags = prompt("tags");
        if (tags === null || tags === "") tags = [];
        Project.createProject(name, tags);
        console.log(Project.getProjectsList());
        Project.setLocalStorage();
      });
  },
  uniqueListeners: {
    projectButtons: function (uiElement, project, index) {
      uiElement
      .querySelector(".add-task")
      .addEventListener("click", () => {
        project.createTask("test", "test test test", new Date());
        Project.setLocalStorage();
      });
      uiElement
      .querySelector(".rm-project")
      .addEventListener("click", () => {
        Project.removeProject(index);
        Project.setLocalStorage();
      });
    },
  }
}