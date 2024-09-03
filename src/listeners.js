import { projects, currentProject, currentTask, createProject } from "./core.js";

export function listeners(){
    document.querySelector("button").addEventListener("click", function() {
        let name = prompt("name");
        if (name === null) return;
        let tags = prompt("tags");
        if (tags === null) tags = "";
        createProject(name, tags);
        console.log(projects);
    });
}