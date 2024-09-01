import "./styles.css";

const projects = [];
let currentProject;
let currentTask;
class Project {
    items = [];
    constructor(name, tags) {
        this.name = name;
        this.tags = tags;
    }
    MakeCurrentProject() {
        currentProject = this;
    }
}
class Task {
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
    currentProject = projects[projects.length-1];
}

function createTask() {
    currentProject.items.push(new Task("testing"));
}