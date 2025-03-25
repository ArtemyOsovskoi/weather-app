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


let menuButton = document.getElementById("menu");
let dialog = document.getElementById("dialog");
let closeMenu = document.getElementById("closeButton");

menuButton.addEventListener("click", () => {
  const clientRect = menuButton.getBoundingClientRect();
  dialog.style.top = `${clientRect.bottom + 10}px`; // Position 10px below the button
  dialog.style.left = `${clientRect.left}px`; // Align with the left edge of the button
  dialog.showModal();
});

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

/* 24.03 - осталось доделать:
  - смена темы день\ночь
  - стайлинг инпут поля ввода локации
  - адаптивный дизайн
*/
