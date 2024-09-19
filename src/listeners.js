import { Project } from "./core.js";

export function mainListeners() {
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
}
export const uniqueListeners = {
  projectButtons: function (uiElement, project, index) {
    uiElement
    .querySelector(".add-task")
    .addEventListener("click", () => {
      project.createTask("test", "test test test", new Date());
    });
    uiElement
    .querySelector(".rm-project")
    .addEventListener("click", () => {
      Project.removeProject(index);
      Project.setLocalStorage();
    });
  },
};
