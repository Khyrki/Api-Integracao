const express = require('express');
const rescue = require('express-rescue');

const route = express.Router();

const integrationController = require('../controllers/integrationController');

route.post('/', rescue(integrationController));

module.exports = route;
