import "./styles.css";
//import { someFunction } from "./moduleName.js"; <-- reminder for myself how to do it :)

//take a location and return the weather data for that location
//variable with location
let locationInputData = document.getElementById("location");
let locationButton = document.getElementById("location_btn");

async function getLocationWeatherData() {
  try {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInputData.value}?unitGroup=us&key=N4YPZMGEYDWUN5QDN4464VYV9&contentType=json`;

    const response = await fetch(url);
    const jsonData = await response.json();
    if (response.ok) {
      console.log("Promise resolved");
      console.log(jsonData);
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}

//getLocationWeatherData();

locationButton.addEventListener("click", getLocationWeatherData);

/* async function searchGif() {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${search.value}&api_key=7CkGGQkqUHujXAe1i31OgekECUyWWP8O&limit=5`,
        { mode: "cors" },
      );
      const data = await response.json();
      if (response.ok) {
        img.src = data.data[0].images.original.url;
        console.log("Promise resolved");
      } else {
        console.error("Promise resolved but HTTP status failed");
      }
    } catch {
      console.error("Promise rejected");
    }
  }
  
  searchBtn.addEventListener("click", searchGif); */
