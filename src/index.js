import "./styles.css";

// const projects store all instances of class Project
const projects = []; 
let currentProject;
let currentTask;
// Class Project allow user to create instances, that contain tasks related to a specific project
class Project {
    // public field items store all instances of class Task inside a project
    items = [];
    constructor(name, tags) {
        this.name = name;
        this.tags = tags;
    }
    MakeCurrentProject() {
        currentProject = this;
    }
}
// class Task is a straightforward classical to-do task list
class Task {
    // public field list store all instances of class textBlock inside a task
    list = [];
    constructor(name, tags) {
        this.name = name;
        this.tags = tags;
    }
    addTextBlock(text, type, margin) {
        this.list.push(new TextBlock(text, type, margin));
    }
    MakeCurrentTask() {
        currentTask = this;
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

function createProject(name) {
    projects.push(new Project(name));
    projects[projects.length-1].MakeCurrentProject();
}

function createTask(name) {
    currentProject.items.push(new Task(name));
}