const apiKey = "78ae8712db2fa75aa674f511bb07e796";

async function getWeather() {
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡 Temp: ${data.main.temp}°C</p>
      <p>🌥 Weather: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching data";
  }
}