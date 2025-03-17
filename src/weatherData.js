import partly_cloudy from "./partly-cloudy-day.svg";
import overcast from "./overcast.svg";
import cloudy_fog from "./partly-cloudy-day-fog.svg";
import rain from "./rain.svg";
import snow from "./snow.svg";
import thunder from "./thunderstorms.svg";
import clear_day from "./clear-day.svg";
import cloudy from "./cloudy.svg";
import windy from "./wind.svg";

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
      let split_condition = weather_conditions.split(",")[0];

      switch (true) {
        case split_condition.includes("Clear"):
          console.log("clear!");
          mainTodayWeatherIcon.src = clear_day;
          break;
        case split_condition.includes("Partially"):
          console.log("partially cloudy!");
          mainTodayWeatherIcon.src = partly_cloudy;
        break;
        case split_condition.includes("Cloudy"):
          console.log("cloudy");
          mainTodayWeatherIcon.src = cloudy;
        break;
        case split_condition.includes("Overcast"):
          console.log("overcast!");
          mainTodayWeatherIcon.src = overcast;
          break;
        case split_condition.includes("Snow"):
          console.log("snow!");
          mainTodayWeatherIcon.src = snow;
          break;
        case split_condition.includes("Rain"):
          console.log("rain!");
          mainTodayWeatherIcon.src = rain;
          break;
        case split_condition.includes("Storms"):
          console.log("thunder");
          mainTodayWeatherIcon.src = thunder;
          break;
        case split_condition.includes("fog"):
          console.log("fog");
          mainTodayWeatherIcon.src = cloudy_fog;
        break;
        case split_condition.includes("wind"):
          console.log("wind");
          mainTodayWeatherIcon.src = windy;
        break;
      }
      return jsonData;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
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
      const tempHourlyArr = hourlyArr.map((value) => value.temp);
      for (let index = 0; index < tempHourlyArr.length; index++) {
        hourlyNodes[index].innerHTML = tempHourlyArr[index] + "°C";
      };

      const conditionsHourlyArr = hourlyArr.map((value) => value.conditions);
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
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}

export async function getWeeklyWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();

    if (response.ok) {
      console.log("Promise resolved");
      //console.log(jsonData.days.slice(1, 8));
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

      let nextSevenDaysConditionsArr = nextSevenDaysArr.map((value) => value.conditions);
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
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
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
      let split_condition = weather_conditions.split(",")[0];

      switch (true) {
        case split_condition.includes("Clear"):
          console.log("clear!");
          mainTodayWeatherIcon.src = clear_day;
          break;
        case split_condition.includes("Partially"):
          console.log("partially cloudy!");
          mainTodayWeatherIcon.src = partly_cloudy;
        break;
        case split_condition.includes("Cloudy"):
          console.log("cloudy");
          mainTodayWeatherIcon.src = cloudy;
        break;
        case split_condition.includes("Overcast"):
          console.log("overcast!");
          mainTodayWeatherIcon.src = overcast;
          break;
        case split_condition.includes("Snow"):
          console.log("snow!");
          mainTodayWeatherIcon.src = snow;
          break;
        case split_condition.includes("Rain"):
          console.log("rain!");
          mainTodayWeatherIcon.src = rain;
          break;
        case split_condition.includes("Storms"):
          console.log("thunder");
          mainTodayWeatherIcon.src = thunder;
          break;
        case split_condition.includes("fog"):
          console.log("fog");
          mainTodayWeatherIcon.src = cloudy_fog;
        break;
        case split_condition.includes("wind"):
          console.log("wind");
          mainTodayWeatherIcon.src = windy;
        break;
      }

      return jsonData;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
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

      const tempHourlyArr = hourlyArr.map((value) => value.temp);
      /* console.log(`hourly array ${tempHourlyArr}`); */

      for (let index = 0; index < tempHourlyArr.length; index++) {
        hourlyNodes[index].innerHTML = tempHourlyArr[index] + "°F";
      }

      const conditionsHourlyArr = hourlyArr.map((value) => value.conditions);
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
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
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

      let tempSevenDaysArr = nextSevenDaysArr.map((value) => value.temp);
      for (let index = 0; index < tempSevenDaysArr.length; index++) {
        nextSevenDaysNodes[index].innerHTML = tempSevenDaysArr[index] + "°F";
      }

      let nextSevenDatesArr = nextSevenDaysArr.map((value) => value.datetime);
      for (let index = 0; index < nextSevenDatesArr.length; index++) {
        let trimDate = nextSevenDatesArr[index].slice(5);
        nextDayDateNode[index].innerHTML = trimDate;
      }

      let nextSevenDaysConditionsArr = nextSevenDaysArr.map((value) => value.conditions);
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
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
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
      let split_condition = weather_conditions.split(",")[0];

      switch (true) {
        case split_condition.includes("Clear"):
          console.log("clear!");
          mainTodayWeatherIcon.src = clear_day;
          break;
        case split_condition.includes("Partially"):
          console.log("partially cloudy!");
          mainTodayWeatherIcon.src = partly_cloudy;
        break;
        case split_condition.includes("Cloudy"):
          console.log("cloudy");
          mainTodayWeatherIcon.src = cloudy;
        break;
        case split_condition.includes("Overcast"):
          console.log("overcast!");
          mainTodayWeatherIcon.src = overcast;
          break;
        case split_condition.includes("Snow"):
          console.log("snow!");
          mainTodayWeatherIcon.src = snow;
          break;
        case split_condition.includes("Rain"):
          console.log("rain!");
          mainTodayWeatherIcon.src = rain;
          break;
        case split_condition.includes("Storms"):
          console.log("thunder");
          mainTodayWeatherIcon.src = thunder;
          break;
        case split_condition.includes("fog"):
          console.log("fog");
          mainTodayWeatherIcon.src = cloudy_fog;
        break;
        case split_condition.includes("wind"):
          console.log("wind");
          mainTodayWeatherIcon.src = windy;
        break;
      }

      return jsonData;
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
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

      const tempHourlyArr = hourlyArr.map((value) => value.temp);

      for (let index = 0; index < tempHourlyArr.length; index++) {
        hourlyNodes[index].innerHTML = tempHourlyArr[index] + "°C";
      }

      const conditionsHourlyArr = hourlyArr.map((value) => value.conditions);
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
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
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
      //console.log(jsonData.days.slice(1, 8));
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

      let nextSevenDaysConditionsArr = nextSevenDaysArr.map((value) => value.conditions);
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
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}
