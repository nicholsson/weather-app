console.log("Script is hooked!");
import { Query } from "./utils/Data.js";
import { WeatherData } from "./components/weatherData.js";
(async () => {
  try {
    const json = await Query.getData("Rome");
    if (json) {
      const weatherData = new WeatherData(json);
      console.log(weatherData);
    } else {
      console.log("No weather data recorded");
    }
  } catch (error) {
    console.error("Failed to fetch weatherData");
  }
})();
