const fs = require('fs');
const path = require('path');

function getCityCodes() {
  const filePath = path.join(__dirname, '../cities.json'); // backend/utils -> ../cities.json
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const cities = data.List; // extract the array inside "List"
  return cities.map(city => city.CityCode);
}

module.exports = getCityCodes;
