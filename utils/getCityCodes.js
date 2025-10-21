// backend/utils/getCityCodes.js
const fs = require('fs');
const path = require('path');

function getCityCodes() {
  const filePath = path.join(__dirname, '../../cities.json'); // adjust if needed
  const cities = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return cities.map(city => city.CityCode); // assuming JSON has CityCode field
}

module.exports = getCityCodes;
