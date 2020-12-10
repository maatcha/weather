const getDayInLetters = (day) => {
	let dayInLetters = '';
	if (day === 0) {
		dayInLetters = 'Sunday';
	} else if (day === 1) {
		dayInLetters = 'Monday';
	} else if (day === 2) {
		dayInLetters = 'Tuesday';
	} else if (day === 3) {
		dayInLetters = 'Wednesday';
	} else if (day === 4) {
		dayInLetters = 'Thursday';
	} else if (day === 5) {
		dayInLetters = 'Friday';
	} else {
		dayInLetters = 'Saturday';
	}
	return dayInLetters;
}

const getMonthInLetters = (mm) => {
	let monthInLetters = '';
	if (mm === 1) {
		monthInLetters = 'January';
	} else if (mm === 2) {
		monthInLetters = 'February';
	} else if (mm === 3) {
		monthInLetters = 'March';
	} else if (mm === 4) {
		monthInLetters = 'April';
	} else if (mm === 5) {
		monthInLetters = 'May';
	} else if (mm === 6) {
		monthInLetters = 'June';
	} else if (mm ===7) {
		monthInLetters = 'July';
	} else if (mm === 8) {
		monthInLetters = 'August';
	} else if (mm === 9) {
		monthInLetters = 'September';
	} else if (mm === 10) {
		monthInLetters = 'October';
	} else if (mm === 11) {
		monthInLetters = 'November';
	} else {
		monthInLetters = 'December';
	}
	return monthInLetters;	

}

const getDateNow = (timeNow) => {
	const day = timeNow.getDay();
	let dayInLetters = getDayInLetters(day);
	const dd = timeNow.getDate();
	const mm = timeNow.getMonth()+1;
	const monthInLetters = getMonthInLetters(mm);
	const yyyy = timeNow.getFullYear();
	const date = `${dayInLetters}, ${monthInLetters} the ${dd}th of ${yyyy}`;
	return date;
}

const makeMinutesLooksGood = (min) => {
	let goodMin = '';
	if (min === 0) {
		goodMin = '00';
	} else if (min === 1) {
		goodMin = '01';
	}	else if (min === 2) {
		goodMin = '02';
	} else if (min === 3) {
		goodMin = '03';
	} else if (min === 4) {
		goodMin = '04';
	} else if (min === 5) {
		goodMin = '05';
	} else if (min === 6) {
		goodMin = '06';
	} else if (min === 7) {
		goodMin = '07';
	} else if (min === 8) {
		goodMin = '08';
	} else if (min === 9) {
		goodMin = '09';
	} else {
		goodMin = min;
	}
	return goodMin;
}

const getTimeNow = (timeNow) => {
	const hh = timeNow.getHours();
	const min = timeNow.getMinutes();
	const goodMin = makeMinutesLooksGood(min);
	const time = `${hh} : ${goodMin}`;
	return time;
}

const fetchWeatherByCityName = (cityInput) => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=ecdd7b9a76aa223b076d772b5d5c4b8b`)
		.then(response => response.json())
		.then(displayWeather);
}

const displayWeather = (data) => {
	const weatherContainer = document.querySelector('.weather-container');
	weatherContainer.innerHTML = '';
	const cityName = data.name;
	const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
	const temp = Math.round(data.main.temp * 10) / 10;
	const description = data.weather[0].description;
	const timeNow = new Date();
	const date = getDateNow(timeNow);
	const time = getTimeNow(timeNow);
	const tempMax = Math.round(data.main.temp_max * 10) / 10;
	const tempMin = Math.round(data.main.temp_min * 10) / 10;
	weatherContainer.insertAdjacentHTML('beforeend', `<div class="weather-city-name">${cityName}</div>`);
	weatherContainer.insertAdjacentHTML('beforeend', `<div class="weather-icon"><img src="${iconUrl}" style="width: 20vh;"></img></div>`);
	weatherContainer.insertAdjacentHTML('beforeend', `<div class="weather-temp">T°Now : ${temp}°C</div>`);
	weatherContainer.insertAdjacentHTML('beforeend', `<div class="weather-description">${description}</div>`);
	weatherContainer.insertAdjacentHTML('beforeend', `<div class="weather-date">${date}</div>`);
	weatherContainer.insertAdjacentHTML('beforeend', `<div class="weather-time">${time}</div>`);
	weatherContainer.insertAdjacentHTML('beforeend', `<div class="weather-temp-max">T°Max : ${tempMax} °C</div>`);
	weatherContainer.insertAdjacentHTML('beforeend', `<div class="weather-temp-min">T°Min : ${tempMin} °C</div>`);
}

const fetchWeatherByCoordinates = (coordinates) => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=ecdd7b9a76aa223b076d772b5d5c4b8b`)
		.then(response => response.json())
		.then(displayWeather);
}

const findLocation = () => {
	navigator.geolocation.getCurrentPosition((data) => {
    fetchWeatherByCoordinates({ lat: data.coords.latitude, lon: data.coords.longitude });
	});
}

export { findLocation, fetchWeatherByCityName };