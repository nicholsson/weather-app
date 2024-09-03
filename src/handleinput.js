import { Query } from "./weatherdata.js";
import { NewLine } from "./newLine.js";

export class InputHandler {
  constructor(input) {
    this.input = input;
  }
  async handle() {
    if (this.input[0] != "!") {
      errorMessage();
      return;
    } else {
      if (this.input[1] == "f") {
        const location = this.input.slice(2, this.input.length);
        const query = new Query();
        const data = await query.getData(location);
        process(data, this.input);
      } else if (this.input == "!clt") {
        resetTerminal();
        return;
      }
    }
  }
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
