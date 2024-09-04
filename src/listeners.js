import { Project, Task, TextBlock } from "./core.js";
import { domMethods } from "./ui.js";

export function listeners(){
    document.querySelector(".projects-buttons > button:first-child").addEventListener("click", function() {
        let name = prompt("name");
        if (name === null) return;
        let tags = prompt("tags");
        if (tags === null) tags = "";
        Project.createProject(name, tags);
        domMethods.addNewProject();
        console.log(Project.getProjectsList());
    });
}