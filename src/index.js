import "./styles.css";
//import { someFunction } from "./moduleName.js"; <-- reminder for myself how to do it :)

//TRY to USE both async await AND promises :3

let locationInputData = document.getElementById("location");
let locationButton = document.getElementById("location_btn");
let todayWeatherNode = document.getElementById("today_weather");
let todayCondition = document.getElementById("today_weather_condition");
let hourlyNodes = document.getElementsByClassName("hourly_weather");
let nextSevenDaysNodes = document.getElementsByClassName("nextDays_weather");
let nextDayDateNode = document.getElementsByClassName("next_day_date");
let todayWeatherFeels = document.getElementById("today_weather_feelslike");

let sunriseNode = document.getElementById("sunrise");
let sunsetNode = document.getElementById("sunset");
let rainChanceNode = document.getElementById("rainChance");
let windNode = document.getElementById("wind");
let uvIndexNode = document.getElementById("uvIndex");
let humidityNode = document.getElementById("humidity");

let minNode = document.getElementById("today_min");
let maxNode = document.getElementById("today_max");

async function getTodayWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      console.log("Promise resolved");
      console.log(jsonData.days);
      todayWeatherNode.innerHTML = `Today in ${locationInputData.value} is ${jsonData.days[0].temp}°C`;
      todayCondition.innerHTML = jsonData.days[0].conditions;
      todayWeatherFeels.innerHTML = "Feels like" + " " + jsonData.days[0].feelslike + "°C";
      sunriseNode.innerHTML = jsonData.days[0].sunrise;
      sunsetNode.innerHTML = jsonData.days[0].sunset;
      rainChanceNode.innerHTML = jsonData.days[0].precipprob + " " + "%";
      windNode.innerHTML = jsonData.days[0].windspeed + " " + "km/h";
      uvIndexNode.innerHTML = jsonData.days[0].uvindex;
      humidityNode.innerHTML = jsonData.days[0].humidity + " " + "%";
      minNode.innerHTML = "Min" + " " + jsonData.days[0].tempmin + " " + "°C";
      maxNode.innerHTML = "Max" + " " + jsonData.days[0].tempmax + " " + "°C";

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
      /* console.log(`hourly array ${tempHourlyArr}`); */

      for (let index = 0; index < tempHourlyArr.length; index++) {
        hourlyNodes[index].innerHTML = tempHourlyArr[index] + "°C";
      }
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}

async function getWeeklyWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");
      console.log(jsonData.days.slice(1, 8));
      //show weather for next 7 days
      let nextSevenDaysArr = jsonData.days.slice(1, 8);

      let tempSevenDaysArr = nextSevenDaysArr.map((value) => value.temp);
      for (let index = 0; index < tempSevenDaysArr.length; index++) {
        nextSevenDaysNodes[index].innerHTML = tempSevenDaysArr[index] + "°C";
      }

      let nextSevenDatesArr = nextSevenDaysArr.map((value) => value.datetime);
      for (let index = 0; index < nextSevenDatesArr.length; index++) {
        let trimDate = nextSevenDatesArr[index].slice(5);
        nextDayDateNode[index].innerHTML = trimDate;
      }

    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }



}


locationButton.addEventListener("click", getTodayWeatherData);
locationButton.addEventListener("click", getHourlyWeatherData);
locationButton.addEventListener("click", getWeeklyWeatherData);