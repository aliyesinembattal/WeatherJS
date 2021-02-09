const weather = new Weather();
const ui = new UI();
const weatherStorage = new WeatherStorage();

document.getElementById("changeCountry").addEventListener("click", () => {
  let input = document.getElementById("inputCountry");
  if (input.value === "") {
    showAlert("");
  } else {
    weather.getWeatherByCountry(input.value).then((data) => {
      console.log(data);
      ui.showWeather(data);
      weatherStorage.saveCountry(data);
      input.value = "";
    });
  }
});

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inputCountry").value = "";
  const country = weatherStorage.getCountry();
  if (country) {
    ui.showWeather(country);
  } else {
    weather
      .getWeatherByCountry("İstanbul")
      .then((data) => {
        ui.showWeather(data);
      })
      .catch((err) => showAlert(err));
  }
});

const showAlert = (err) => {
  document.getElementById("error").innerHTML = `
  <div class="alert alert-dismissible alert-warning" style="background: #fa7f72;">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <h4 class="alert-heading">Error!</h4>
  <p class="mb-0">${err}<a href="#" class="alert-link">Please check your country name...</a></p>
</div>
  `;

  setTimeout(() => {
    document.getElementById("error").innerHTML = "";
  }, 3000);
};
