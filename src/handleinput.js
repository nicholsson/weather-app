import { Query } from "./weatherdata.js";

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
        console.log(location);
        const query = new Query();
        const data = await query.getData(location);
        process(data);
      } else if (this.input == "!clt") {
        resetTerminal();
        return;
      }
    }
  }
}
function process(data) {
  const name = data.resolvedAddress;
  const temperature = data.currentConditions.temp;
  const conditions = data.currentConditions.conditions;
  const time = data.currentConditions.datetime;
  const forecast = data.days[0];
  processForecast(forecast);
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
