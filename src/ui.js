import { Project, Task } from "./core";

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
    addTasksCards: function(currentProjectList) {
      console.log(currentProjectList);
      const container = document.querySelector(".tasks-list");
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      for (let i=0; i<currentProjectList.length; i++) {
        let taskCard = Object.assign(document.createElement("div"),
        {className: `task task${i}`});
        taskCard.appendChild(Object.assign(document.createElement("h2"),
        {textContent: `${currentProjectList[i].name}`}));
        taskCard.appendChild(Object.assign(document.createElement("p"),
        {textContent: `${currentProjectList[i].tags}`}));
        taskCard.appendChild(Object.assign(document.createElement("div"),
        {className: "text-zone"}));
        for (let j=0; j<currentProjectList[i].list.length; j++) {
          taskCard.querySelector(".text-zone").appendChild(Object.assign(document.createElement("p"),
          {textContent: `${currentProjectList[i].list[j].text}`}));
        }
        document.querySelector(".tasks-list").appendChild(taskCard);
      }
    }
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
      domMethods.addTasksCards(Project.getCurrentProject().items)
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
    .querySelector(".add-project-modal .submit")
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
      document.querySelector(".add-project-modal form").reset();
    });
    document
    .querySelector(".add-project-modal .cancel")
    .addEventListener("click", (e) => {
      e.preventDefault();
      dialog.close();
      document.querySelector(".add-project-modal form").reset();
    });
  },
  taskModal: function() {
    const dialog = document.querySelector(".add-task-modal");
    document
    .querySelector(".create-task")
    .addEventListener("click", () => {
      dialog.showModal();
    });
    document.querySelector(".add-text-block").addEventListener("click", () => {
      document.querySelector(".add-task-modal form")
      .insertBefore(
      Object.assign(document.createElement("input"),
      {type: "text", className: "text-field"}), 
      dialog.querySelector(".add-task-modal .submit"));
    });
    document
    .querySelector(".add-task-modal .submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      console.log();
      let name = document
      .querySelector("#task-name")
      .value;
      if (name === null || name === undefined || name === "") return;
      // temporary tags system, later every tag should be an object with name and color keys.
      // and all existing tags should be stored somewhere, to search by tags later.
      let tags = document
      .querySelector("#task-tags")
      .value;
      if (tags === null || tags === "" || tags === undefined) tags = [];
      else {
        tags = tags.trim().split(/\s,\s|\s,|,\s|,/ig);
        console.log(tags);
      }
      Project.getCurrentProject().createTask(name, tags);
      const textFields = document.querySelectorAll(".add-task-modal .text-field");
      for (let i=0; i<textFields.length; i++) {
        Project.getCurrentProject()
        .getTaskList()
        [Project.getCurrentProject().getTaskList().length-1]
        .addTextBlock(textFields[i].value);
      }
      console.log(Project.getProjectsList());
      Project.setLocalStorage();
      dialog.close();
      document.querySelector(".add-task-modal form").reset();
    });
    document
    .querySelector(".add-task-modal .cancel")
    .addEventListener("click", (e) => {
      e.preventDefault();
      dialog.close();
      document.querySelector(".add-task-modal form").reset();
    });
  }
}