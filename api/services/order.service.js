import database from "../database/models";

/**
 * order services performs all action related to order-
 * make an order
 * modify an order
 * get all orders
 */

class OrderService {
  /**
   * @description Make an order
   * @returns {Array} order object array
   */
  static async makeAnOrder(
    id,
    customer_id,
    caterer_id,
    orderStatus_id,
    quantity,
    delivery_cost,
    total_cost
  ) {
    try {
      const foundMeal = await database.Meal.findByPk(Number(id));

      if (foundMeal) {
        return await database.Order.create({
          customer_id,
          caterer_id,
          meal_id: foundMeal.id,
          orderStatus_id,
          quantity,
          delivery_cost,
          total_cost
        });
      }
      return foundMeal;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Edit an existing order with a new order object
   * @param { int } id
   * @param {object} editededOrder
   * @returns {object} editeded order
   */
  static async editAnOrder(order_id, meal_id) {
    try {
      const foundOrder = await database.Order.findByPk(Number(order_id));
      const newMeal = await database.Meal.findOne({
        where: { id: Number(meal_id), available: true }
      });

      if (foundOrder && newMeal && newMeal.available) {
        return await database.Order.update(
          { meal_id: newMeal.id },
          { where: { id: Number(order_id) } }
        );
      }
      return null;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Retrieve and return all orders from our seeded data
   * @returns {Array} order object array
   */
  static async fetchAllOrders(caterer_id) {
    try {
      return await database.Order.findAll({
        where: { caterer_id },
        include: [
          {
            model: database.Meal,
            as: "meal",
            where: { available: true }
          },
          {
            model: database.Caterer
          }
        ]
      });
    } catch (error) {
      throw error;
    }
  }
}

export default OrderService;
