import "./styles.css";
import { ui } from "./ui.js";
import { listeners } from "./listeners.js";
import { Project } from "./core.js";

// ui();
// listeners();

Project.createProject("test");
Project.getProjectsList()[0].setCurrentProject();
Project.getCurrentProject().createTask("tost");
Project.getCurrentProject().getTaskList()[0].addTextBlock("blabla", "checkbox", "0");
Project.getCurrentProject().getTaskList()[0].getTextList();
Project.getCurrentProject().getTaskList()[0].getTextList()[0].changeText("ogogo");
Project.getCurrentProject().getTaskList()[0].getTextList();
Project.getProjectsList();
