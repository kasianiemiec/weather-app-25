let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let date = document.querySelector("#date");
date.innerHTML = `${day} ${hours}:${minutes}`;

let apiKey = "98bc9f158331o422ta5db05dbd90ba36";

function displayWeather(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#current-temp-temp");
  let humidityElement = document.querySelector("#current-humidity");
  let descriptionElement = document.querySelector("#current-description");
  let windElement = document.querySelector("#current-wind");

  let temp = Math.round(response.data.temperature.current);

  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  tempElement.innerHTML = temp;
  humidityElement.innerHTML = response.data.temperature.humidity;
  descriptionElement.innerHTML = response.data.condition.description;
  windElement.innerHTML = response.data.wind.speed;
}
function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let city = searchInput.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);
