const { getAllOrdersModel } = require('../model/ordersModel');

const orderService = async () => {
  const result = await getAllOrdersModel();
  return result;
};

module.exports = orderService;
