const orderService = require('../service/ordersService');

const getOrdersController = async (_req, res, _next) => {
  const result = await orderService();
  res.status(200).json(result);
};

module.exports = getOrdersController;
