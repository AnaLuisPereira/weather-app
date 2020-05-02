let now = new Date();
let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let day = days[now.getDay()];
let date = now.getDate();
let month = months[now.getMonth()];
let year = now.getFullYear();
h2.innerHTML = `${day}, ${date} of ${month} ${year}`;

let apiKey = "830aed891211b6be1ef87627b8211da0";
let city = document.querySelector("city");
let apiUrl = `https//api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
function showWeather(response) {
  console.log(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `It is currently ${temperature} degrees in ${response.data.name}`;
}
axios.get(apiUrl).then(showWeather);

let button = document.querySelector("button");
button.addEventListener("click", city);

function showPosition(position) {
  let 
  console.log(position.coords.latitude);

  console.log(position.coords.longitude);
}
function getCurrentPosition(){
navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button.Location")
button.addEventListener("click", getCurrentPosition)
