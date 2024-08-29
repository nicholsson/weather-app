import { Query } from "../utils/Data.js";
class WeatherData {
  constructor(json) {
    this.temperature = json.currentConditions.temp;
    this.conditions = json.currentConditions.conditions;
    this.feelslike = json.days[0].feelslike;
    this.address = json.resolvedAddress;
  }
}
export { WeatherData };
