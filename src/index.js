import "./styles.css";
//import { someFunction } from "./moduleName.js"; <-- reminder for myself how to do it :)


console.log("hello world");

let data =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Saint%20Petersburg?unitGroup=us&key=N4YPZMGEYDWUN5QDN4464VYV9";

//take a location and return the weather data for that location
async function getLocationWeatherData() {
  try {
    const response = await fetch(data);
    const jsonData = await response.json();
    if (response.ok) {
      console.log("Promise resolved");
      console.log(jsonData.days);
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}
getLocationWeatherData();

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
  } */
