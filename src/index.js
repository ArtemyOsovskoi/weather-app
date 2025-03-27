import "./styles.css";
import {
  getTodayWeatherData,
  getHourlyWeatherData,
  getWeeklyWeatherData,
  getTodayWeatherDataFah,
  getHourlyWeatherDataFah,
  getWeeklyWeatherDataFah,
  todayWeatherNode,
  getTodayWeatherDataSpb,
  getHourlyWeatherDataSpb,
  getWeeklyWeatherDataSpb,
} from "./weatherData";


//on load default location
getTodayWeatherDataSpb();
getHourlyWeatherDataSpb();
getWeeklyWeatherDataSpb();

//get weather by entering location
let locationButton = document.getElementById("location_btn");
locationButton.addEventListener("click", getTodayWeatherData);
locationButton.addEventListener("click", getHourlyWeatherData);
locationButton.addEventListener("click", getWeeklyWeatherData);

//search by pressing enter key 
let locationInput = document.getElementById("location");
locationInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    getTodayWeatherData();
    getHourlyWeatherData();
    getWeeklyWeatherData();
  }
});

//focus on the input field on page load
window.addEventListener("load", function() {
  document.getElementById("location").focus();
});


let fahrenheit_btn = document.getElementById("fahrenheit");
fahrenheit_btn.addEventListener("click", () => {
  if (todayWeatherNode.innerHTML.includes("°C")) {
    getTodayWeatherDataFah();
    getHourlyWeatherDataFah();
    getWeeklyWeatherDataFah();
    fahrenheit_btn.innerHTML = "°C";
  } else {
    getTodayWeatherData();
    getHourlyWeatherData();
    getWeeklyWeatherData();
    fahrenheit_btn.innerHTML = "°F";
  }
});
