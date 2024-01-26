function getWeather() {
  const apiKey = "41eb6a4c5bd9a8ad6867d500d998ef80";
  const cityInput = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");

  // Check if the user entered a city name
  if (cityInput.trim() === "") {
    alert("Please enter a city name.");
    return;
  }

  // Fetch weather data from OpenWeatherMap API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Display weather information
      const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
      const humidity = data.main.humidity;
      const description = data.weather[0].description;

      weatherInfo.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Description: ${description}</p>
            `;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      weatherInfo.innerHTML = "Error fetching weather data.";
    });
}
