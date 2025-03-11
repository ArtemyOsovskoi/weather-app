import "./styles.css";
import {
  getTodayWeatherData,
  getHourlyWeatherData,
  getWeeklyWeatherData,
  getTodayWeatherDataFah,
  getHourlyWeatherDataFah,
  getWeeklyWeatherDataFah,
  todayWeatherNode,
} from "./weatherData";

let locationButton = document.getElementById("location_btn");
locationButton.addEventListener("click", getTodayWeatherData);
locationButton.addEventListener("click", getHourlyWeatherData);
locationButton.addEventListener("click", getWeeklyWeatherData);

/* 10/03 - next make celc\fahr switch function and day\night UI switch
  add those 2 buttons inside one menu button
  and then finish styling
*/
let menuButton = document.getElementById("menu");
let dialog = document.getElementById("dialog");
menuButton.addEventListener("click", () => {
  dialog.showModal();
});

let closeMenu = document.getElementById("closeButton");
closeMenu.addEventListener("click", () => {
  dialog.close();
});

let fahrenheit_btn = document.getElementById("fahrenheit");
fahrenheit_btn.addEventListener("click", () => {
  if (todayWeatherNode.innerHTML.includes("°C")) {
    getTodayWeatherDataFah();
    getHourlyWeatherDataFah();
    getWeeklyWeatherDataFah();
    fahrenheit_btn.innerHTML = "Celsius";
  } else {
    getTodayWeatherData();
    getHourlyWeatherData();
    getWeeklyWeatherData();
    fahrenheit_btn.innerHTML = "Fahrenheit";
  }
});

let switch_theme = document.getElementById("switch_theme");
switch_theme.addEventListener("click", () => {
  /* UI switch function() */
});