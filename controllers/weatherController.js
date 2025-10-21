// backend/controllers/weatherController.js
const axios = require('axios');
const getCityCodes = require('../utils/getCityCodes');
const { getCache, setCache } = require('../utils/cache');

const API_KEY = process.env.OPENWEATHER_API_KEY;

async function getWeather(req, res) {
  try {
    const cityCodes = getCityCodes();
    const results = [];

    for (const cityId of cityCodes) {
      const cached = getCache(cityId);
      if (cached) {
        results.push(cached);
        continue;
      }

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`
      );

      const weatherData = {
        id: cityId,
        name: response.data.name,
        description: response.data.weather[0].description,
        temp: response.data.main.temp
      };

      setCache(cityId, weatherData);
      results.push(weatherData);
    }

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
}

module.exports = { getWeather };
