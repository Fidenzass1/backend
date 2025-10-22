// backend/routes/weather.js
const express = require('express');
const { getWeather } = require('../controllers/weatherController');
const router = express.Router();
const checkJwt=require('../middleware/auth')

router.get('/',checkJwt, getWeather);

module.exports = router;
