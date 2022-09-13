const API_KEY = '46edb1751a3390f4ba358f51ff5e7434';

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const ico = document.querySelector('.weather_ico');
      const weather = document.querySelector('#weather span:nth-child(2)');
      const city = document.querySelector('#weather span:last-child');
      ico.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      ico.alt = data.weather[0].main;
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}`;
    })
    .catch((error) => console.log('error', error));
};

const onGeoFail = () => alert("Can't find you. No weather for you.");

const currentPosition = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoFail); //브라우저에서 위치 좌표를 줌
