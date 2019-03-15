import OrderService from "../services/order.service";

/**
 * order controller performs controls  request and response -
 * make an order
 * modify an order
 * get all orders
 */
class OrderController {
  /**
   * @description order a meal
   * @param {object} req
   * @param {object} res
   * @returns {object} apiResponse
   */
  static makeAnOrder(req, res) {
    const { customer_id } = req.token;
    const {
      caterer_id,
      meal_id,
      orderStatus_id,
      quantity,
      delivery_cost,
      total_cost
    } = req.body;

    if (
      !req.body.meal_id ||
      !req.body.orderStatus_id ||
      !req.body.quantity ||
      !req.body.delivery_cost ||
      !req.body.total_cost
    ) {
      res.status(
        400,
        "All parameters are required(meal_id,type,caterer_id)",
        null
      );
      return res;
    }

    if (Number.isNaN(Number(meal_id))) {
      res.error(400, "Invalid meal_id. meal_id must be a number");
      return res.send(res);
    }

    const orderedMeal = OrderService.makeAnOrder(
      customer_id,
      caterer_id,
      meal_id,
      orderStatus_id,
      quantity,
      delivery_cost,
      total_cost
    );

    return orderedMeal
      .then(order => {
        if (order == null) {
          res.error(404, "This meal cannot be found");
        } else {
          res.status(200, "Your order has been placed", order);
        }
        res.send(res);
      })
      .catch(error => {
        res.error(400, error.message);
        return res.send(res);
      });
  }

  /**
   * @description update an order record
   * @param {object} req
   * @param {object} res
   * @returns {object} apires
   */
  static async editAnOrder(req, res) {
    const {
      meal_id,
      orderStatus_id,
      quantity,
      delivery_cost,
      total_cost
    } = req.body;
    const { id } = req.params;

    if (Number.isNaN(Number(id)) || Number.isNaN(Number(meal_id))) {
      res.error(400, "Invalid ID. ID's must be a number");
      return res;
    }

    try {
      const updateOrder = await OrderService.editAnOrder(
        id,
        meal_id,
        orderStatus_id,
        quantity,
        delivery_cost,
        total_cost
      );

      if (updateOrder === null || updateOrder === 0) {
        res.error(
          400,
          `Order with id ${id} or Meal with id ${meal_id} cannot be found`
        );
      } else {
        res.status(201, "Order was successfully updated");
      }
      return res;
    } catch (error) {
      res.error(400, error.message);
      return res;
    }
  }

  /**
   * @description retrieve and return all orders from our data
   * @param {object} req
   * @param {object} res
   * @returns {Array} order object array
   */
  static fetchAllOrders(req, res) {
    const { caterer_id } = req.token;
    const allOrders = OrderService.fetchAllOrders(caterer_id);
    return allOrders
      .then(meals => {
        if (meals.length === 0) {
          res.status(200, "No order found!");
        } else {
          res.status(200, "Order was successfully fetched!", meals);
        }
        res;
      })
      .catch(error => {
        res.error(400, error.message);
        return res;
      });
  }
}

export default OrderController;
