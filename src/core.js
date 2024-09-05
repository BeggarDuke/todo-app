// import { domMethods } from "./ui";

// Class "Project" allow user to create instances, that contain tasks related to a specific project
class Project {
    // private static field "projects" store all instances of class Project
    static #projects = [];
    static #currentProject;
    // private field "items" store all instances of class Task inside a project
    #items = [];
    constructor(name, tags) {
        this.name = name;
        this.tags = tags;
    }
    static createProject(name, tags) {
        this.#projects.push(new Project(name, tags));
        // domMethods.addNewProject(this.getProjectsList());
    }
    static getProjectsList() {
        console.log(this.#projects);
        return this.#projects;
    }
    static getCurrentProject() {
        console.log(this.#currentProject);
        return this.#currentProject;
    }
    setCurrentProject() {
        Project.#currentProject = this;
    }
    getTaskList() {
        console.log(this.#items);
        return this.#items;
    }
    createTask(name, tags) {
        this.#items.push(new Task(name, tags));
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
    // private field "list" store all instances of class textBlock inside a task
    #list = [];
    constructor(name, tags) {
        this.name = name;
        this.tags = tags;
    }
    static getCurrentTask() {
        console.log(this.#currentTask);
        return this.#currentTask;
    }
    setCurrentTask() {
        Task.#currentTask = this;
    }
    getTextList() {
        console.log(this.#list);
        return this.#list;
    }
    addTextBlock(text, type, margin) {
        this.#list.push(new TextBlock(text, type, margin));
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