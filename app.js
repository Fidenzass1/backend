const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/weather', weatherRoutes);
app.use('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

module.exports = app;
