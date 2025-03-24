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

import rain_background from "./rain_gif_background.gif";
let bodyNode = document.body;
/* bodyNode.style.backgroundImage = 'url(./rain_gif_background.gif)'; */

//'url(img/phone-screen.jpg)';

//on load default location
getTodayWeatherDataSpb();
getHourlyWeatherDataSpb();
getWeeklyWeatherDataSpb();

let locationButton = document.getElementById("location_btn");
locationButton.addEventListener("click", getTodayWeatherData);
locationButton.addEventListener("click", getHourlyWeatherData);
locationButton.addEventListener("click", getWeeklyWeatherData);

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
