const express = require('express');
const rescue = require('express-rescue');

const route = express.Router();

const getOrdersController = require('../controllers/orderController');

route.get('/', rescue(getOrdersController));

module.exports = route;
