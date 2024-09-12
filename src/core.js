// import { domMethods } from "./ui";
import { datesMethods } from "./dates";

// Class "Project" allow user to create instances, that contain tasks related to a specific project
class Project {
    // static field "projects" store all instances of class Project
    static projects = [];
    static #currentProject;
    // field "items" store all instances of class Task inside a project
    items = [];
    constructor(name, tags) {
        this.name = name;
        this.tags = tags;
    }
    static createProject(name, tags) {
        Project.projects.push(new Project(name, tags));
        // domMethods.addNewProject(this.getProjectsList());
    }
    static getProjectsList() {
        console.log(Project.projects);
        return Project.projects;
    }
    static getCurrentProject() {
        console.log(Project.#currentProject);
        return Project.#currentProject;
    }
    static getLocalStorage() {
        Project.projects = JSON.parse(localStorage.getItem("projects"));
    }
    static setLocalStorage() {
        localStorage.setItem("projects", JSON.stringify(Project.projects));
    }
    setCurrentProject() {
        Project.#currentProject = this;
    }
    getTaskList() {
        console.log(this.items);
        return this.items;
    }
    createTask(name, tags) {
        this.items.push(new Task(name, tags));
    }
    editProject(newName, newTags) {
        if (newName === null) return;
        this.name = newName;
        if (newTags === null) {
            return;
        }
        else {
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
    constructor(name, tags) {
        this.name = name;
        this.tags = tags;
        this.beginDate = datesMethods.setBeginDate();
        this.endDate = datesMethods.setEndDate();
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
        }
        else {
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
        }
        else {
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

export { Project, Task, TextBlock };