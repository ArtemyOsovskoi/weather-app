import "./styles.css";
//import { someFunction } from "./moduleName.js"; <-- reminder for myself how to do it :)

//TRY to USE both async await AND promises :3

let locationInputData = document.getElementById("location");
let locationButton = document.getElementById("location_btn");
let todayWeatherNode = document.getElementById("today_weather");
let todayCondition = document.getElementById("today_weather_condition");
let hourlyNodes = document.getElementsByClassName("hourly_weather");



async function getTodayWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      console.log("Promise resolved");
      console.log(jsonData.days[0]);
      todayWeatherNode.innerHTML = `Today in ${locationInputData.value} is ${jsonData.days[0].temp}°C`;
      todayCondition.innerHTML = jsonData.days[0].conditions;

      return jsonData;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}


async function getHourlyWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");

      const hourlyArr = jsonData.days[0].hours;
      hourlyArr.splice(0, 8);

      const tempHourlyArr = hourlyArr.map((value) => value.temp);
      console.log(`hourly array ${tempHourlyArr}`);

      for (let index = 0; index < tempHourlyArr.length; index++) {
        hourlyNodes[index].innerHTML += tempHourlyArr[index] + "°C";
      }
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}

async function getWeeklyWeatherData() {

}


locationButton.addEventListener("click", getTodayWeatherData);
locationButton.addEventListener("click", getHourlyWeatherData);
locationButton.addEventListener("click", getWeeklyWeatherData);