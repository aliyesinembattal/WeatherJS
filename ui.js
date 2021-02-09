class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.str = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  showWeather(country) {
    this.location.innerHTML = `${country.name}, ${country.sys.country}`;
    this.desc.innerHTML = `${country.weather[0].description}`;
    this.str.innerHTML = `${country.main.temp} °F | ${(
      country.main.temp - 273
    ).toFixed(2)} °C`;
    this.icon.src = `http://openweathermap.org/img/w/${country.weather[0].icon}.png
    `;
    this.humidity.innerHTML = `Relative Humidity: ${country.main.humidity}%`;
    this.pressure.innerHTML = `Pressure: ${country.main.pressure} hPa`;
    this.feelsLike.innerHTML = `Feels Like: ${country.main.feels_like} °F (${(
      country.main.feels_like - 273
    ).toFixed(2)} °C)`;
    this.wind.innerHTML = `Wind: ${country.wind.deg}° ${country.wind.speed} MPH`;
  }
}
