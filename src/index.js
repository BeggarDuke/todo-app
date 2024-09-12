import "./styles.css";
import { ui } from "./ui.js";
import { listeners } from "./listeners.js";
import { Project } from "./core.js";

function getLocalStorage() {
    if (!localStorage.getItem("projects")) return;
    let data = JSON.parse(localStorage.getItem("projects"));
    for (let i=0; i<data.length; i++) {
        Project.createProject(
            data[i].name, 
            data[i].tags
        );
        for(let j=0; j<data[i].items.length; j++) {
            Project.getProjectsList()[i].createTask(
                data[i].items[j].name, 
                data[i].items[j].tags,
                data[i].items[j].beginDate,
                data[i].items[j].endDate,
            );
            Project.getProjectsList()[i].items[j].creationDate = data[i].items[j].creationDate;
            for (let k=0; k<data[i].items[j].list.length; k++) {
                Project.getProjectsList()[i].items[j].addTextBlock(
                    data[i].items[j].list[k].text, 
                    data[i].items[j].list[k].type, 
                    data[i].items[j].list[k].margin
                );
            }
        }
    }
}

// ui();
// listeners();
// localStorage.clear();
// getLocalStorage();

Project.createProject("test");
Project.getProjectsList()[0].setCurrentProject();
Project.getCurrentProject().createTask("tost");
Project.getCurrentProject().getTaskList()[0].addTextBlock("blabla", "checkbox", "0");
Project.getCurrentProject().getTaskList()[0].getTextList();
Project.getCurrentProject().getTaskList()[0].getTextList()[0].changeText("ogogo");
Project.getCurrentProject().getTaskList()[0].getTextList();
Project.createProject("test2");
// Project.setLocalStorage("projects", JSON.stringify(Project.getProjectsList()));
console.log(Project.getProjectsList());