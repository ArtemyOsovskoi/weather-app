import "./styles.css";
//import { someFunction } from "./moduleName.js"; <-- reminder for myself how to do it :)



//TRY to USE both async await AND promises :3

//take a location and return the weather data for that location
//variable with location
let locationInputData = document.getElementById("location");
let locationButton = document.getElementById("location_btn");
let todayWeatherNode = document.getElementById('today_weather');

async function getTodayWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=metric&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      console.log("Promise resolved");
      console.log(jsonData);
      todayWeatherNode.innerHTML = `Today in ${locationInputData.value} is ${jsonData.days[0].temp}°C`;
      
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
          todayWeatherNode.innerHTML = `${jsonData.days[0].hours.temp}`;
          
          return jsonData;
        } else {
          console.error("Promise resolved but HTTP status failed");
        }
      } catch {
        console.error("Promise rejected");
      }
}

//Проблема - Нужно взять данные из массива hours.temp - то есть
/* пройтись по массиву и взять нужные данные
потом отобразить эти данные в параграфах для
каждого часа в сутках 
array.map мб подойдет? По сути нужно назначить для
кадого параграфа.innerHTML данные из каждого hours.temp
*/






locationButton.addEventListener("click", getTodayWeatherData);

//DOM
/* const todayWeatherDiv = document.getElementById('today_weather');

async function todayWeatherDOM(data) {
    //let weatherData = await jsonData;
    const todayWeatherContent = document.createTextNode(data.days[0].feelslike);
    
    todayWeatherDiv.appendChild(todayWeatherContent);
}

 */