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


let locationButton = document.getElementById("location_btn");
locationButton.addEventListener("click", getTodayWeatherData);
locationButton.addEventListener("click", getHourlyWeatherData);
locationButton.addEventListener("click", getWeeklyWeatherData);

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
  } else if (todayWeatherNode.innerHTML.includes("Saint")){
    /* Разобраться как менять на фаренгейт локацию по умолчанию (СПБ)
      сейчас выдает ошибку тк переменная при смене показателей требует
      выбранной локации - а в случае дефолта она уже выбрана и переменная пуста
    */


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
