import { initSelect2 } from './plugins/init_select2.js';
import { colorTimer } from './modules/color_timer.js';
import { findLocation, fetchWeatherByCityName } from './modules/fetch_weather.js';

initSelect2();

colorTimer();

findLocation();

const form = document.querySelector('form');
const cityInput = document.getElementById('city-input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchWeatherByCityName(cityInput.value);
});


// 'http://api.openweathermap.org/data/2.5/weather?lat=12.44&lon=22.22&appid=ecdd7b9a76aa223b076d772b5d5c4b8b'
// 'https://openweathermap.org/img/w/${data.weather[0].icon}.png'
// 'https://openweathermap.org/img/w/04d.png'