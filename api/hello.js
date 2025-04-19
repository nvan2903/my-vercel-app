const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send('Welcome to Vercel Serverless Function!');
});

module.exports = app;
