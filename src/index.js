import "./styles.css";
import { listeners } from "./ui.js";
import { Project } from "./core.js";

listeners.projectModal();
listeners.taskModal();
Project.getLocalStorage();
// localStorage.clear();