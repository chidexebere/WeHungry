import database from "../database/models";

/**
 * menu services performs all actions
 * setup menu for the day and
 * fetch menu for the day
 */

class MenuService {
  /**
   * @description Updates the availability of a meal for today for logged in caterer
   * @returns {Array} menu object array
   */
  static async setUpMenu(id, caterer_id) {
    try {
      const foundMeal = await database.Meal.findOne({
        where: { id, caterer_id }
      });

      if (foundMeal && foundMeal.available) {
        throw new Error("Meal has already been added to menu list");
      }

      if (foundMeal) {
        return await database.Meal.update(
          { available: true },
          {
            returning: true,
            where: { id: Number(id), caterer_ids }
          }
        );
      }
      throw new Error(`Meal with id ${id} cannot be found`);
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Retrieve and return all menu from all caterers
   * @returns {Array} menu object array
   */
  static async fetchMenu() {
    try {
      return await database.Meal.findAll({
        where: { available: true },
        include: [
          {
            model: database.Customer
          }
        ]
      });
    } catch (error) {
      throw error;
    }
  }
}

export default MenuService;
