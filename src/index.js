import "./styles.css";
//import { someFunction } from "./moduleName.js"; <-- reminder for myself how to do it :)
import { getTodayWeatherData } from "./weatherData";
import { getHourlyWeatherData } from "./weatherData";
import { getWeeklyWeatherData } from "./weatherData";
import { switchTemp } from "./switchFunc";

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
})

/* //show form window - input the details for the new book
const showFormWindow = document.getElementById("formPopup");
const dialog = document.getElementById("dialog");
showFormWindow.addEventListener("click", () => {
  dialog.showModal();
});

//close form window
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
  dialog.close();
}); */