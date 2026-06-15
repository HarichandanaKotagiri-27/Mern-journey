
class NetworkError extends Error {
  constructor(message) {
    super(message)
    this.name = "NetworkError"
  }
}

class APIError extends Error {
  constructor(status, message) {
    super(message)
    this.name = "APIError"
    this.status = status
  }
}

const cities = {
  vijayawada: { lat: 16.5,  lon: 80.6  },
  hyderabad:  { lat: 17.38, lon: 78.47 },
  bangalore:  { lat: 12.97, lon: 77.59 },
  mumbai:     { lat: 19.07, lon: 72.87 },
  delhi:      { lat: 28.67, lon: 77.22 },
  chennai:    { lat: 13.08, lon: 80.27 }
}

function getWeatherDescription(code) {
  const weatherCodes = {
    0: "Clear sky ☀️",
    1: "Mainly clear 🌤️",
    2: "Partly cloudy ⛅",
    3: "Overcast ☁️",
    45: "Foggy 🌫️",
    51: "Light drizzle 🌦️",
    61: "Slight rain 🌧️",
    63: "Moderate rain 🌧️",
    80: "Rain showers 🌦️",
    95: "Thunderstorm ⛈️"
  }
  return weatherCodes[code] || "Unknown ❓"
}

function celsiusToFahrenheit(celsius) {
  return ((celsius * 9/5) + 32).toFixed(1)
}

function showLoading() {
  document.getElementById("weather-display").innerHTML = 
    "<p id='loading'>Loading weather... ⏳</p>"
}

function showError(message) {
  document.getElementById("weather-display").innerHTML = 
    `<p style="color: red">❌ ${message}</p>`
}

async function fetchWeather(cityName) {
  const city = cities[cityName]

  if (!city) {
    showError("City not found")
    return
  }

  showLoading()

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`
    )

    if (!response.ok) {
      throw new APIError(response.status, `Server error: ${response.status}`)
    }

    const data = await response.json()

    if (!data.current_weather) {
      throw new APIError(200, "Weather data missing from response")
    }

    displayWeather(cityName, data.current_weather)

  } catch (error) {
    if (error instanceof APIError) {
      showError(`API Error ${error.status}: ${error.message}`)
    } else if (error.name === "TypeError") {
      showError("Network error — check your connection")
    } else {
      showError(`Unexpected error: ${error.message}`)
    }
  }
}

async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return await response.json()
    } catch (error) {
      console.log(`Attempt ${attempt} failed: ${error.message}`)

      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`)
      }

      // Wait before retrying — longer each time
      await new Promise(resolve => setTimeout(resolve, attempt * 1000))
    }
  }
}

function fetchWithTimeout(url, timeoutMs = 5000) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeoutMs)
  )

  return Promise.race([
    fetch(url),
    timeoutPromise
  ])
}

function displayWeather(cityName, weather) {
  const fahrenheit = celsiusToFahrenheit(weather.temperature)
  const description = getWeatherDescription(weather.weathercode)

  document.getElementById("weather-display").innerHTML = `
    <h2>${cityName.charAt(0).toUpperCase() + cityName.slice(1)}</h2>
    <p class="temperature">${weather.temperature}°C / ${fahrenheit}°F</p>
    <p class="description">${description}</p>
    <p class="wind">💨 Wind: ${weather.windspeed} km/h</p>
    <p class="time">🕐 Updated: ${weather.time}</p>
  `
}

// City button clicks
const cityButtons = document.querySelectorAll(".city-btn")

cityButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    // Remove active from all buttons
    cityButtons.forEach(btn => btn.classList.remove("active"))
    // Add active to clicked
    e.target.classList.add("active")
    // Fetch weather for clicked city
    fetchWeather(e.target.dataset.city)
  })
})

// Load Vijayawada on start
fetchWeather("vijayawada")

