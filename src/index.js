import "./styles.css";
import { mainListeners } from "./listeners.js";
import { Project } from "./core.js";

mainListeners();
Project.getLocalStorage();
// localStorage.clear();