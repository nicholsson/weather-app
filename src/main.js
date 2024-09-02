import { Query } from "./weatherdata.js";
import { InputHandler } from "./handleinput.js";
import { appendPalette } from "./DOM.js";
import "./style.css";

console.log("Script is hooked!");

appendPalette();

const input = document.querySelector("#cmd-line");
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = input.value;
    const inputHandler = new InputHandler(command);
    inputHandler.handle();
  }
});
