class WeatherStorage {
  constructor() {
    this.country;
    this.defaultCountry = {
      coord: {
        lon: 28.9833,
        lat: 41.0351,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      base: "stations",
      main: {
        temp: 289.08,
        feels_like: 284.03,
        temp_min: 288.15,
        temp_max: 290.15,
        pressure: 1012,
        humidity: 67,
      },
      visibility: 10000,
      wind: {
        speed: 7.2,
        deg: 220,
      },
      clouds: {
        all: 0,
      },
      dt: 1612891070,
      sys: {
        type: 1,
        id: 6970,
        country: "TR",
        sunrise: 1612847173,
        sunset: 1612884628,
      },
      timezone: 10800,
      id: 745042,
      name: "Istanbul",
      cod: 200,
    };
  }
  saveCountry(country) {
    const saveCountry = country ? country : this.defaultCountry;
    localStorage.setItem("weatherCountry", JSON.stringify(saveCountry));
  }
  getCountry() {
    return JSON.parse(localStorage.getItem("weatherCountry"));
  }
}
