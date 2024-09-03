import { Query } from "./weatherdata.js";
import { NewLine } from "./newLine.js";

export class InputHandler {
  constructor(input) {
    this.input = input;
  }
  async handle() {
    const form = document.querySelector("form");
    const inputList = this.input.split(" ");
    console.log(inputList);
    if (inputList[0] !== "!f" && inputList[0] !== "!clt") {
      errorMessage(this.input);
      form.reset();
      return;
    } else {
      if (inputList[0] === "!f") {
        if (inputList[1]) {
          const location = this.input.slice(3).trim();
          const query = new Query();
          const data = await query.getData(location);
          process(data, this.input);
        } else {
          errorMessage(this.input);
        }
      } else if (inputList[0] === "!clt") {
        resetTerminal();
      }
      form.reset();
    }
  }
}
function errorMessage(command) {
  const errorMsg = `<strong style="color:red">[Error]: <i style="color:pink">${command}</i> </strong>invalid command`;
  const terminal = document.querySelector(".terminal");
  const inputLine = document.querySelector(".input-line");
  const msg = document.createElement("div");
  msg.className = "command-line";
  msg.innerHTML = errorMsg;
  terminal.insertBefore(msg, inputLine);
}
function process(data, command) {
  const name = data.resolvedAddress;
  const temperature = data.currentConditions.temp;
  const conditions = data.currentConditions.conditions;
  const time = data.currentConditions.datetime;
  const forecast = data.days[0];
  processForecast(forecast);

  const cmdLine = new NewLine(command, true, false);
  cmdLine.line();

  const lineName = new NewLine(name, false, "name");
  lineName.line();

  const lineTemp = new NewLine(temperature, false, "temp");
  lineTemp.line();

  const lineCond = new NewLine(conditions, false, "cond");
  lineCond.line();
  const lineTime = new NewLine(time, false, "time");
  lineTime.line();
}
function processForecast(forecast) {
  const hours = forecast.hours;
  hours.forEach((hour) => {
    const time = hour.datetime;
    const temp = hour.temp;
    console.log(time);
    console.log(temp);
  });
}
function resetTerminal() {
  const terminal = document.querySelector(".terminal");
  terminal.innerHTML = `<div class="input-line">
          <form>
            <div class="command-line">
              <input type="text" id="cmd-line" autofocus />
            </div>
          </form>
        </div>`;
  addEventToForm();
}
export function addEventToForm() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = document.querySelector("input").value;
    const inputHandler = new InputHandler(command);
    inputHandler.handle();
  });
}
