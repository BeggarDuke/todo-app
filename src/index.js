import "./styles.css";
import { listeners } from "./ui.js";
import { Project } from "./core.js";

listeners.mainListeners();
Project.getLocalStorage();
localStorage.clear();