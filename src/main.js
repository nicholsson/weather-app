import { Query } from "./weatherdata.js";
import { InputHandler } from "./handleinput.js";
import { appendPalette } from "./DOM.js";
import "./style.css";

console.log("Script is hooked!");

appendPalette();

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = document.querySelector("input").value;
  const inputHandler = new InputHandler(command);
  inputHandler.handle();
});
