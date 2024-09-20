import "./styles.css";
import { listeners } from "./ui.js";
import { Project } from "./core.js";

listeners.projectModal();
Project.getLocalStorage();
// localStorage.clear();