import { domMethods } from "./ui";
import { datesMethods } from "./dates";

// Class "Project" allow user to create instances, that contain tasks related to a specific project
class Project {
  // static field "projects" store all instances of class Project
  static #projects = [];
  static #currentProject;
  // field "items" store all instances of class Task inside a project
  items = [];
  constructor(name, tags) {
    this.name = name;
    this.tags = tags;
  }
  static createProject(name, tags) {
    Project.getProjectsList().push(new Project(name, tags));
    domMethods.addProjectsCards(Project.getProjectsList());
  }
  static removeProject(project) {
    Project.getProjectsList().splice(project, 1);
    domMethods.addProjectsCards(Project.getProjectsList());
  }
  static getProjectsList() {
    console.log(Project.#projects);
    return Project.#projects;
  }
  static getCurrentProject() {
    console.log(Project.#currentProject);
    return Project.#currentProject;
  }
  setCurrentProject() {
    Project.#currentProject = this;
  }
  static getLocalStorage() {
    // console.log(localStorage.getItem("projects"));
    if (!localStorage.getItem("projects")) return;
    let data = JSON.parse(localStorage.getItem("projects"));
    for (let i = 0; i < data.length; i++) {
      Project.createProject(data[i].name, data[i].tags);
      for (let j = 0; j < data[i].items.length; j++) {
        let beginDate;
        let endDate;
        if (data[i].items[j].beginDate) {
          beginDate = data[i].items[j].beginDate.date;
        }
        if (data[i].items[j].endDate) {
          endDate = data[i].items[j].endDate.date;
        }
        Project.getProjectsList()[i].createTask(
          data[i].items[j].name,
          data[i].items[j].tags,
          beginDate,
          endDate
        );
        Project.getProjectsList()[i].items[j].creationDate = {
          date: new Date(data[i].items[j].creationDate.date),
          formattedDate: data[i].items[j].creationDate.formattedDate,
        };
        for (let k = 0; k < data[i].items[j].list.length; k++) {
          Project.getProjectsList()[i].items[j].addTextBlock(
            data[i].items[j].list[k].text,
            data[i].items[j].list[k].type,
            data[i].items[j].list[k].margin
          );
        }
      }
    }
    console.log(Project.getProjectsList());
  }
  static setLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(Project.getProjectsList()));
  }
  getTaskList() {
    console.log(this.items);
    return this.items;
  }
  createTask(name, tags, beginDate, endDate) {
    this.items.push(new Task(name, tags, beginDate, endDate));
  }
  editProject(newName, newTags) {
    if (newName === null) return;
    this.name = newName;
    if (newTags === null) {
      return;
    } else {
      this.tags = newTags;
    }
  }
}
// class "Task" is a straightforward classical to-do task list
class Task {
  static #currentTask;
  creationDate = datesMethods.setCreationDate();
  // field "list" store all instances of class textBlock inside a task
  list = [];
  constructor(name, tags, beginDate, endDate) {
    this.name = name;
    this.tags = tags;
    this.beginDate = datesMethods.setBeginDate(beginDate);
    this.endDate = datesMethods.setEndDate(endDate);
  }
  static getCurrentTask() {
    console.log(Task.#currentTask);
    return Task.#currentTask;
  }
  setCurrentTask() {
    Task.#currentTask = this;
  }
  getTextList() {
    console.log(this.list);
    return this.list;
  }
  addTextBlock(text, type, margin) {
    this.list.push(new TextBlock(text, type, margin));
  }
  editTask(newName, newTags) {
    if (newName === null) return;
    this.name = newName;
    if (newTags === null) {
      return;
    } else {
      this.tags = newTags;
    }
  }
}
// class TextBlock is a one text line inside of instance of class Task
// not sure about this implementation of text inside of task, but it seems fun for now and i want to try it
class TextBlock {
  constructor(text, type, margin) {
    this.text = text;
    this.type = type;
    this.margin = margin;
  }
  switchType() {
    if (this.type === "checkbox") {
      this.type = "plainText";
    } else {
      this.type = "checkbox";
    }
  }
  changeText(newText) {
    this.text = newText;
  }
  changeMargin(newMargin) {
    this.margin = newMargin;
  }
}

export { Project };
