import "./styles.css";
//import { someFunction } from "./moduleName.js"; <-- reminder for myself how to do it :)
import { getTodayWeatherData } from "./weatherData";
import { getHourlyWeatherData } from "./weatherData";
import { getWeeklyWeatherData } from "./weatherData";

let locationButton = document.getElementById("location_btn");
locationButton.addEventListener("click", getTodayWeatherData);
locationButton.addEventListener("click", getHourlyWeatherData);
locationButton.addEventListener("click", getWeeklyWeatherData);

/* 10/03 - next make celc\fahr switch function and day\night UI switch
  add those 2 buttons inside one menu button
  and then finish styling
*/