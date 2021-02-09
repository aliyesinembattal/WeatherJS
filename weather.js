class Weather {
  constructor() {
    this.api_key = "c817e1c2df0d68e001e55d3139a381ef";
  }

  async getWeatherByCountry(country) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${this.api_key}`
    );

    const weather = await res.json();

    return weather;
  }
}
