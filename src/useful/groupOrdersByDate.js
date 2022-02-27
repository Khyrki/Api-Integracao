// Nesta funcao uso um Hash map para ordenar as ordens por data
const groupOrdersByDate = (ordersArray) => {
  const groupedOrders = {};

  ordersArray.forEach((order) => {
    const data = order.won_time.split(' ')[0];
    if (!groupedOrders[data]) {
      groupedOrders[data] = [
        { total: order.value },
        {
          id: order.id, cliente: order.title, data: order.won_time, valor: order.value,
        },
      ];
    } else {
      groupedOrders[data] = [
        ...groupedOrders[data],
        {
          id: order.id, cliente: order.title, data: order.won_time, valor: order.value,
        },
      ];
      groupedOrders[data][0] = { total: order.value + groupedOrders[data][0].total };
    }
  });

  return groupedOrders;
};

module.exports = groupOrdersByDate;
