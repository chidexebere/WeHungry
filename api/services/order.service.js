import orderData from "../utils/orderData";
import Order from "../models/order.model";

const orderService = {
  createAnOrder(order) {
    const newId = orderData.orders.length + 1;
    const newOrder = order;
    newOrder.id = newId;
    newOrder.createdAt = new Date();
    newOrder.updatedAt = new Date();
    orderData.orders.push(newOrder);
    return newOrder;
  },

  editAnOrder(id, orderUpdate) {
    const modiifiedOrder = orderData.orders.find(order => order.id == id);
    modiifiedOrder.mealId = orderUpdate.mealId;
    modiifiedOrder.quantity = orderUpdate.quantity;
    modiifiedOrder.status = orderUpdate.status;
    return modiifiedOrder;
  },
  fetchAllOrders() {
    const orders = orderData.orders.map(order => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.mealId = order.mealId;
      newOrder.userId = order.userId;
      newOrder.quantity = order.quantity;
      newOrder.deliveryCost = order.deliveryCost;
      newOrder.totalCost = order.totalCost;
      newOrder.status = order.status;
      return newOrder;
    });
    return orders;
  }
};

export default orderService;
