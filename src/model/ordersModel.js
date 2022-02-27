const connection = require('./connection');

const postOrdersModel = async (groupedOrdersByDate) => {
  await connection().then((db) => db.collection('orders').insertOne(groupedOrdersByDate));
};

const getAllOrdersModel = async () => {
  const result = await connection().then((db) => db.collection('orders').find({}).toArray());
  return result;
};

module.exports = {
  postOrdersModel,
  getAllOrdersModel,
};
