const express = require('express');
const bodyParser = require('body-parser');
const orderRoute = require('./routes/orders');
const integrationRoute = require('./routes/integration');
const errorMiddleware = require('./middleware/error');

const app = express();

app.use(bodyParser.json());

// Realiza integracao entre o Pipedrive e o Bling
app.use('/integration', integrationRoute);

// Lista as ordens do banco de dados
app.use('/order', orderRoute);

app.use(errorMiddleware);

module.exports = app;
