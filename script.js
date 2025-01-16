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

function displayWeather(response) {
  console.log(response.data);
  let h1 = document.querySelector("h1");
  let tempElement = document.querySelector("#current-temp-temp");
  let humidityElement = document.querySelector("#current-humidity");
  let descriptionElement = document.querySelector("#current-description");
  let windElement = document.querySelector("#current-wind");
  let iconElement = document.querySelector("#icon");

  let icon = `<img
              src="${response.data.condition.icon_url}"
              alt="weather-icon"
          />`;

  iconElement.innerHTML = icon;

  h1.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = response.data.temperature.humidity;
  descriptionElement.innerHTML = response.data.condition.description;
  windElement.innerHTML = response.data.wind.speed;
}

function searchCity(city) {
  let apiKey = "98bc9f158331o422ta5db05dbd90ba36";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}
function handleSearchSumbit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  searchCity(searchInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSearchSumbit);
