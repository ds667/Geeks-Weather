const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('city').value;
  const weatherInfo = document.getElementById('weatherInfo');

  if (!city) {
    weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    const { name, main, weather } = data;

    weatherInfo.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Temperature:</strong> ${main.temp}&#8451;</p>
      <p><strong>Feels Like:</strong> ${main.feels_like}&#8451;</p>
      <p><strong>Weather:</strong> ${weather[0].description}</p>
    `;
  } catch (error) {
    weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
