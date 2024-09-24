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
            listeners.projectButtons(projectCard, projects[i], i);
        }
    },
}

export const listeners = {
  projectButtons: function (uiElement, project, index) {
    uiElement
    .querySelector(".add-task")
    .addEventListener("click", () => {
      project.createTask("test", "test test test", new Date());
      Project.setLocalStorage();
      console.log(Project.getCurrentProject());
    });
    uiElement
    .querySelector(".rm-project")
    .addEventListener("click", () => {
      Project.removeProject(index);
      Project.setLocalStorage();
      console.log(Project.getCurrentProject());
    });
    uiElement.
    querySelector(".select-project").
    addEventListener("click", () => {
      project.setCurrentProject();
      Project.setLocalStorage();
      console.log(Project.getCurrentProject());
    });
  },
  projectModal: function() {
    const dialog = document.querySelector(".add-project-modal");
    document
    .querySelector(".projects-buttons button:first-child")
    .addEventListener("click", () => {
      dialog.showModal();
    });
    document
    .querySelector(".add-project-modal form input[type=submit]")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let name = document
      .querySelector("#project-name")
      .value;
      if (name === null || name === undefined || name === "") return;
      // temporary tags system, later every tag should be an object with name and color keys.
      // and all existing tags should be stored somewhere, to search by tags later.
      let tags = document
      .querySelector("#project-tags")
      .value;
      if (tags === null || tags === "" || tags === undefined) tags = [];
      else {
        tags = tags.trim().split(/\s,\s|\s,|,\s|,/ig);
        console.log(tags);
      }
      Project.createProject(name, tags);
      console.log(Project.getProjectsList());
      Project.setLocalStorage();
      dialog.close();
      document.querySelector(".add-project-modal > form").reset();
    });
    document
    .querySelector(".add-project-modal form input[type=button]")
    .addEventListener("click", (e) => {
      e.preventDefault();
      dialog.close();
      document.querySelector(".add-project-modal form").reset();
    });
  }
}