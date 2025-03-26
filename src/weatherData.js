import partly_cloudy from "./partly-cloudy-day.svg";
import overcast from "./overcast.svg";
import cloudy_fog from "./partly-cloudy-day-fog.svg";
import rain from "./rain.svg";
import snow from "./snow.svg";
import thunder from "./thunderstorms.svg";
import clear_day from "./clear-day.svg";
import cloudy from "./cloudy.svg";
import windy from "./wind.svg";

import rain_background from "./rain_gif_background.gif";
import snow_background from "./snow_gif_background.gif";
import wind_background from "./wind_gif_background.gif";
import thunder_background from "./thtunderstorm_gif_background.gif";
import cloudy_background from "./cloudy_gif_background.gif";
import clear_background from "./clcear_day_background.gif";
import fog_background from "./fog_gif_background.gif";
import overcast_background from "./overcast_gif_background.gif";

let locationInputData = document.getElementById("location");
export let todayWeatherNode = document.getElementById("today_weather");
let todayCondition = document.getElementById("today_weather_condition");
let hourlyNodes = document.getElementsByClassName("hourly_weather");
let hourlyIconNodes = document.getElementsByClassName("hourly_weather_icon");
let nextSevenDaysNodes = document.getElementsByClassName("nextDays_weather");
let nextSevenDaysIconNodes = document.getElementsByClassName("nextDays_weather_icon");
let nextDayDateNode = document.getElementsByClassName("next_day_date");
let todayWeatherFeels = document.getElementById("today_weather_feelslike");

let sunriseNode = document.getElementById("sunrise");
let sunsetNode = document.getElementById("sunset");
let rainChanceNode = document.getElementById("rainChance");
let windNode = document.getElementById("wind");
let uvIndexNode = document.getElementById("uvIndex");
let humidityNode = document.getElementById("humidity");

let mainTodayWeatherIcon = document.getElementById("main_today_weather_icon");

let minNode = document.getElementById("today_min");
let maxNode = document.getElementById("today_max");

let bodyNode = document.getElementById("body");


//display icons based on current weather
function showConditions(condition) {
  let split_condition = condition.split(",")[0]
      switch (true) {
        case split_condition.includes("Clear"):
          console.log("clear!");
          mainTodayWeatherIcon.src = clear_day;
          bodyNode.style.backgroundImage = `url(${clear_background})`;
          break;
        case split_condition.includes("Partially"):
          console.log("partially cloudy!");
          mainTodayWeatherIcon.src = partly_cloudy;
          bodyNode.style.backgroundImage = `url(${cloudy_background})`;
        break;
        case split_condition.includes("Cloudy"):
          console.log("cloudy");
          mainTodayWeatherIcon.src = cloudy;
          bodyNode.style.backgroundImage = `url(${cloudy_background})`;
        break;
        case split_condition.includes("Overcast"):
          console.log("overcast!");
          mainTodayWeatherIcon.src = overcast;
          bodyNode.style.backgroundImage = `url(${overcast_background})`;
          break;
        case split_condition.includes("Snow"):
          console.log("snow!");
          mainTodayWeatherIcon.src = snow;
          bodyNode.style.backgroundImage = `url(${snow_background})`;
          break;
        case split_condition.includes("Rain"):
          console.log("rain!");
          mainTodayWeatherIcon.src = rain;
          bodyNode.style.backgroundImage = `url(${rain_background})`;
          break;
        case split_condition.includes("Storms"):
          console.log("thunder");
          mainTodayWeatherIcon.src = thunder;
          bodyNode.style.backgroundImage = `url(${thunder_background})`;
          break;
        case split_condition.includes("fog"):
          console.log("fog");
          mainTodayWeatherIcon.src = cloudy_fog;
          bodyNode.style.backgroundImage = `url(${fog_background})`;
        break;
        case split_condition.includes("wind"):
          console.log("wind");
          mainTodayWeatherIcon.src = windy;
          bodyNode.style.backgroundImage = `url(${wind_background})`;
        break;
      }
}

function showConditionsHourly(condition) {
  const tempHourlyArr = condition.map((value) => value.temp);
  for (let index = 0; index < tempHourlyArr.length; index++) {
    hourlyNodes[index].innerHTML = tempHourlyArr[index] + "°C";
  };

  const conditionsHourlyArr = condition.map((value) => value.conditions);
  for (let index = 0; index < conditionsHourlyArr.length; index++) {
     switch (true) {
      case conditionsHourlyArr[index].includes("Clear"):
        console.log("clear!");
        hourlyIconNodes[index].src = clear_day;
        break;
      case conditionsHourlyArr[index].includes("Partially"):
        console.log("partially cloudy!");
        hourlyIconNodes[index].src = partly_cloudy;
      break;
      case conditionsHourlyArr[index].includes("Cloudy"):
        console.log("cloudy");
        hourlyIconNodes[index].src = cloudy;
      break;
      case conditionsHourlyArr[index].includes("Overcast"):
        console.log("overcast!");
        hourlyIconNodes[index].src = overcast;
        break;
      case conditionsHourlyArr[index].includes("Snow"):
        console.log("snow!");
        hourlyIconNodes[index].src = snow;
        break;
      case conditionsHourlyArr[index].includes("Rain"):
        console.log("rain!");
        hourlyIconNodes[index].src = rain;
        break;
      case conditionsHourlyArr[index].includes("Storms"):
        console.log("thunder");
        hourlyIconNodes[index].src = thunder;
        break;
      case conditionsHourlyArr[index].includes("fog"):
        console.log("fog");
        hourlyIconNodes[index].src = cloudy_fog;
      break;
      case conditionsHourlyArr[index].includes("wind"):
        console.log("wind");
        hourlyIconNodes[index].src = windy;
      break;
    } 
  };
}

function showConditionsHourlyFah(condition) {
    const tempHourlyArr = condition.map((value) => value.temp);
    for (let index = 0; index < tempHourlyArr.length; index++) {
      hourlyNodes[index].innerHTML = tempHourlyArr[index] + "°F";
    } 
  
    const conditionsHourlyArr = condition.map((value) => value.conditions);
    for (let index = 0; index < conditionsHourlyArr.length; index++) {
       switch (true) {
        case conditionsHourlyArr[index].includes("Clear"):
          console.log("clear!");
          hourlyIconNodes[index].src = clear_day;
          break;
        case conditionsHourlyArr[index].includes("Partially"):
          console.log("partially cloudy!");
          hourlyIconNodes[index].src = partly_cloudy;
        break;
        case conditionsHourlyArr[index].includes("Cloudy"):
          console.log("cloudy");
          hourlyIconNodes[index].src = cloudy;
        break;
        case conditionsHourlyArr[index].includes("Overcast"):
          console.log("overcast!");
          hourlyIconNodes[index].src = overcast;
          break;
        case conditionsHourlyArr[index].includes("Snow"):
          console.log("snow!");
          hourlyIconNodes[index].src = snow;
          break;
        case conditionsHourlyArr[index].includes("Rain"):
          console.log("rain!");
          hourlyIconNodes[index].src = rain;
          break;
        case conditionsHourlyArr[index].includes("Storms"):
          console.log("thunder");
          hourlyIconNodes[index].src = thunder;
          break;
        case conditionsHourlyArr[index].includes("fog"):
          console.log("fog");
          hourlyIconNodes[index].src = cloudy_fog;
        break;
        case conditionsHourlyArr[index].includes("wind"):
          console.log("wind");
          hourlyIconNodes[index].src = windy;
        break;
      } 
    };
}

function showConditionsWeekly(condition) {
  let tempSevenDaysArr = condition.map((value) => value.temp);
  for (let index = 0; index < tempSevenDaysArr.length; index++) {
    nextSevenDaysNodes[index].innerHTML = tempSevenDaysArr[index] + "°C";
  }

  let nextSevenDatesArr = condition.map((value) => value.datetime);
  for (let index = 0; index < nextSevenDatesArr.length; index++) {
    let trimDate = nextSevenDatesArr[index].slice(5);
    nextDayDateNode[index].innerHTML = trimDate;
  }

  let nextSevenDaysConditionsArr = condition.map((value) => value.conditions);
  for (let index = 0; index < nextSevenDaysConditionsArr.length; index++) {
    switch (true) {
      case nextSevenDaysConditionsArr[index].includes("Clear"):
        console.log("clear!");
        nextSevenDaysIconNodes[index].src = clear_day;
        break;
      case nextSevenDaysConditionsArr[index].includes("Partially"):
        console.log("partially cloudy!");
        nextSevenDaysIconNodes[index].src = partly_cloudy;
      break;
      case nextSevenDaysConditionsArr[index].includes("Cloudy"):
        console.log("cloudy");
        nextSevenDaysIconNodes[index].src = cloudy;
      break;
      case nextSevenDaysConditionsArr[index].includes("Overcast"):
        console.log("overcast!");
        nextSevenDaysIconNodes[index].src = overcast;
        break;
      case nextSevenDaysConditionsArr[index].includes("Snow"):
        console.log("snow!");
        nextSevenDaysIconNodes[index].src = snow;
        break;
      case nextSevenDaysConditionsArr[index].includes("Rain"):
        console.log("rain!");
        nextSevenDaysIconNodes[index].src = rain;
        break;
      case nextSevenDaysConditionsArr[index].includes("Storms"):
        console.log("thunder");
        nextSevenDaysIconNodes[index].src = thunder;
        break;
      case nextSevenDaysConditionsArr[index].includes("fog"):
        console.log("fog");
        nextSevenDaysIconNodes[index].src = cloudy_fog;
      break;
      case nextSevenDaysConditionsArr[index].includes("wind"):
        console.log("wind");
        nextSevenDaysIconNodes[index].src = windy;
      break;
    } 
  }
};

function showConditionsWeeklyFah(condition) {
  let tempSevenDaysArr = condition.map((value) => value.temp);
  for (let index = 0; index < tempSevenDaysArr.length; index++) {
    nextSevenDaysNodes[index].innerHTML = tempSevenDaysArr[index] + "°F";
  }

  let nextSevenDatesArr = condition.map((value) => value.datetime);
  for (let index = 0; index < nextSevenDatesArr.length; index++) {
    let trimDate = nextSevenDatesArr[index].slice(5);
    nextDayDateNode[index].innerHTML = trimDate;
  }

  let nextSevenDaysConditionsArr = condition.map((value) => value.conditions);
  for (let index = 0; index < nextSevenDaysConditionsArr.length; index++) {
    switch (true) {
      case nextSevenDaysConditionsArr[index].includes("Clear"):
        console.log("clear!");
        nextSevenDaysIconNodes[index].src = clear_day;
        break;
      case nextSevenDaysConditionsArr[index].includes("Partially"):
        console.log("partially cloudy!");
        nextSevenDaysIconNodes[index].src = partly_cloudy;
      break;
      case nextSevenDaysConditionsArr[index].includes("Cloudy"):
        console.log("cloudy");
        nextSevenDaysIconNodes[index].src = cloudy;
      break;
      case nextSevenDaysConditionsArr[index].includes("Overcast"):
        console.log("overcast!");
        nextSevenDaysIconNodes[index].src = overcast;
        break;
      case nextSevenDaysConditionsArr[index].includes("Snow"):
        console.log("snow!");
        nextSevenDaysIconNodes[index].src = snow;
        break;
      case nextSevenDaysConditionsArr[index].includes("Rain"):
        console.log("rain!");
        nextSevenDaysIconNodes[index].src = rain;
        break;
      case nextSevenDaysConditionsArr[index].includes("Storms"):
        console.log("thunder");
        nextSevenDaysIconNodes[index].src = thunder;
        break;
      case nextSevenDaysConditionsArr[index].includes("fog"):
        console.log("fog");
        nextSevenDaysIconNodes[index].src = cloudy_fog;
      break;
      case nextSevenDaysConditionsArr[index].includes("wind"):
        console.log("wind");
        nextSevenDaysIconNodes[index].src = windy;
      break;
    } 
  }
};

//change to Celsius (default)
export async function getTodayWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      console.log("Promise resolved");
      console.log(jsonData.days);
      todayWeatherNode.innerHTML =
        locationInputData.value + " " + jsonData.days[0].temp + "°C";
      todayCondition.innerHTML = jsonData.days[0].conditions;
      todayWeatherFeels.innerHTML =
        "Feels like" + " " + jsonData.days[0].feelslike + "°C";
      sunriseNode.innerHTML = jsonData.days[0].sunrise;
      sunsetNode.innerHTML = jsonData.days[0].sunset;
      rainChanceNode.innerHTML = jsonData.days[0].precipprob + " " + "%";
      windNode.innerHTML = jsonData.days[0].windspeed + " " + "km/h";
      uvIndexNode.innerHTML = jsonData.days[0].uvindex;
      humidityNode.innerHTML = jsonData.days[0].humidity + " " + "%";
      minNode.innerHTML = "Min" + " " + jsonData.days[0].tempmin + " " + "°C";
      maxNode.innerHTML = "Max" + " " + jsonData.days[0].tempmax + " " + "°C";

      let weather_conditions = jsonData.days[0].conditions;
      showConditions(weather_conditions);

      return jsonData;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}

export async function getHourlyWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");

      const hourlyArr = jsonData.days[0].hours;
      hourlyArr.splice(0, 8);
      
      showConditionsHourly(hourlyArr);

    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}

export async function getWeeklyWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");
      
      //show weather for next 7 days
      let nextSevenDaysArr = jsonData.days.slice(1, 8);

      showConditionsWeekly(nextSevenDaysArr);

    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}

//change to Fahrenheit
export async function getTodayWeatherDataFah() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=us&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      console.log("Promise resolved");
      //console.log(jsonData.days);
      todayWeatherNode.innerHTML =
        locationInputData.value + " " + jsonData.days[0].temp + "°F";
      todayCondition.innerHTML = jsonData.days[0].conditions;
      todayWeatherFeels.innerHTML =
        "Feels like" + " " + jsonData.days[0].feelslike + "°F";
      sunriseNode.innerHTML = jsonData.days[0].sunrise;
      sunsetNode.innerHTML = jsonData.days[0].sunset;
      rainChanceNode.innerHTML = jsonData.days[0].precipprob + " " + "%";
      windNode.innerHTML = jsonData.days[0].windspeed + " " + "mph";
      uvIndexNode.innerHTML = jsonData.days[0].uvindex;
      humidityNode.innerHTML = jsonData.days[0].humidity + " " + "%";
      minNode.innerHTML = "Min" + " " + jsonData.days[0].tempmin + " " + "°F";
      maxNode.innerHTML = "Max" + " " + jsonData.days[0].tempmax + " " + "°F";

      let weather_conditions = jsonData.days[0].conditions;
      showConditions(weather_conditions);

      return jsonData;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}

export async function getHourlyWeatherDataFah() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=us&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");

      const hourlyArr = jsonData.days[0].hours;
      hourlyArr.splice(0, 8);
      showConditionsHourlyFah(hourlyArr);

    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}

export async function getWeeklyWeatherDataFah() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=us&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");
      //console.log(jsonData.days.slice(1, 8));
      //show weather for next 7 days
      let nextSevenDaysArr = jsonData.days.slice(1, 8);

      showConditionsWeeklyFah(nextSevenDaysArr);

    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}

//on load default location (Celsius)
export async function getTodayWeatherDataSpb() {
  try {
    locationInputData.value = "Saint Petersburg";
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      console.log("Promise resolved");
      //console.log(jsonData.days);
      todayWeatherNode.innerHTML = `Saint Petersburg ${jsonData.days[0].temp}°C`;
      todayCondition.innerHTML = jsonData.days[0].conditions;
      todayWeatherFeels.innerHTML =
        "Feels like" + " " + jsonData.days[0].feelslike + "°C";
      sunriseNode.innerHTML = jsonData.days[0].sunrise;
      sunsetNode.innerHTML = jsonData.days[0].sunset;
      rainChanceNode.innerHTML = jsonData.days[0].precipprob + " " + "%";
      windNode.innerHTML = jsonData.days[0].windspeed + " " + "km/h";
      uvIndexNode.innerHTML = jsonData.days[0].uvindex;
      humidityNode.innerHTML = jsonData.days[0].humidity + " " + "%";
      minNode.innerHTML = "Min" + " " + jsonData.days[0].tempmin + " " + "°C";
      maxNode.innerHTML = "Max" + " " + jsonData.days[0].tempmax + " " + "°C";

      let weather_conditions = jsonData.days[0].conditions;
      showConditions(weather_conditions);

      return jsonData;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}

export async function getHourlyWeatherDataSpb() {
  try {
    locationInputData.value = "Saint Petersburg";
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");

      const hourlyArr = jsonData.days[0].hours;
      hourlyArr.splice(0, 8);
      showConditionsHourly(hourlyArr);

    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}

export async function getWeeklyWeatherDataSpb() {
  try {
    locationInputData.value = "Saint Petersburg";
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");
      
      //show weather for next 7 days
      let nextSevenDaysArr = jsonData.days.slice(1, 8);
      showConditionsWeekly(nextSevenDaysArr);

    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch (error) {
    console.error("Promise rejected", error);
  }
}
