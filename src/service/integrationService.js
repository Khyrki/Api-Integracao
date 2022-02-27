const { pipedriveInstance, blingInstance, blingXML } = require('../useful/requests');
const groupOrdersByDate = require('../useful/groupOrdersByDate');
const { postOrdersModel } = require('../model/ordersModel');

require('dotenv/config');

const sendOrderToBling = async (orders) => {
  const oneSecond = 1000;

  orders.forEach(async ({ title, value }, index) => {
    setTimeout(async () => {
      await blingInstance.post(`?apikey=${process.env.BLING_KEY}${encodeURI(blingXML(title, value))}`);
      // Estabelece o intervalo de 1 segundo entre requisições para não ferir as diretrizes da API
    }, oneSecond * orders.length - oneSecond * index);
  });
};

const filterWonOrders = (orders) => {
  const wonOrders = orders.filter((order) => order.status === 'won');
  sendOrderToBling(wonOrders);

  const ordered = groupOrdersByDate(wonOrders);
  postOrdersModel(ordered);
};

const integratesPipedriveAndBling = async () => {
  const result = await pipedriveInstance.get();
  filterWonOrders(result.data.data);
};

module.exports = integratesPipedriveAndBling;
