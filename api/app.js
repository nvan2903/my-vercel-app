const express = require('express');
const bodyParser = require('body-parser');
const validator = require('email-validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  console.info('/hello call success');
  res.send('Welcome to Vercel Serverless Function!');
});

app.post('/api/emailValidate', (req, res) => {
  const { email } = req.body;
  if (email) {
    console.info('/emailValidate call success');
    res.json({ status: validator.validate(email) });
  } else {
    console.warn('/emailValidate wrong input');
    res.status(400).json({ status: 'wrong input' });
  }
});

module.exports = app;
