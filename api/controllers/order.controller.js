import OrderService from "../services/order.service";

const OrderController = {
  createAnOrder(req, res) {
    /*
            Expect json of the format
           {
                userId: "1",
                mealId: "4",
                quantity: "3",
                status: "delivered"
            }
        */
    const newOrder = req.body;
    const createdOrder = OrderService.createAnOrder(newOrder);
    return res
      .json({
        status: "success",
        data: createdOrder
      })
      .status(201);
  },

  editAnOrder(req, res) {
    /*
            Enter json of the format
            {
                mealId: "4",
                quantity: "3",
                status: "delivered"
            }
        */
    const id = req.params.id;
    const orderUpdate = req.body;
    const modifiedOrder = OrderService.editAnOrder(id, orderUpdate);
    return res
      .json({
        status: "success",
        data: modifiedOrder
      })
      .status(200);
  },

  fetchAllOrders(req, res) {
    const allOrders = OrderService.fetchAllOrders();
    return res
      .json({
        status: "success",
        data: allOrders
      })
      .status(200);
  }
};

export default OrderController;
