const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/', (req, res) => {
  res.send('Projeto LinkApi');
});

module.exports = app;
