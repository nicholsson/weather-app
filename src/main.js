import { Query } from "./weatherdata.js";
import { appendPalette } from "./DOM.js";
import "./style.css";
console.log("Script is hooked!");

appendPalette();

const query = new Query();
query.getData("Rome");
