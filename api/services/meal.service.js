import database from "../database/models";

/**
 * meal services performs all action related to meal
 * fetching all meal
 * adding a new meal
 * getting a particular meal
 * updating an existing meal and
 * deleting a meal
 */

class MealService {
  /**
   * @description Retrieve and return all meals belong to the authenticated caterer
   * @returns {Array} of meal or throw error
   */
  static async fetchAllMeals(caterer_id) {
    try {
      return await database.Meal.findAll({ where: { caterer_id } });
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Takes a new meal object
   * @param {object} meal
   * @returns {object} created meal
   */
  static async addAMeal(newMeal) {
    try {
      // meal.setDataValue('caterer', await meal.getCaterer());
      return await database.Meal.create(newMeal);
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Finds a meal record belonging to the currently logged in caterer
   * @param { int } id
   * @returns {object} foundMeal
   */
  static async getAMeal(id, caterer_id) {
    try {
      const foundMeal = await database.Meal.findOne({
        where: { id: Number(id), caterer_id }
      });
      return foundMeal;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Updates a meal belonging to the currently logged in caterer
   * @param { int } id
   * @param {object} updatedMeal
   * @returns {object} foundMeal
   */
  static async updateAMeal(id, updatedMeal, caterer_id) {
    try {
      const foundMeal = await database.Meal.findOne({
        where: { id: Number(id), caterer_id }
      });

      if (foundMeal) {
        await database.Meal.update(updatedMeal, { where: { id: Number(id) } });
        return updatedMeal;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Delete a meal record belonging to the currently logged in caterer
   * @param { int } id
   * @returns {object} meal
   */
  static async deleteAMeal(id, caterer_id) {
    try {
      const foundMeal = await database.Meal.findOne({
        where: { id: Number(id), caterer_id }
      });
      if (foundMeal) {
        const deleteRecord = await database.Meal.destroy({
          where: { id: Number(id), caterer_id }
        });
        return deleteRecord;
      }
      return 0;
    } catch (error) {
      throw error;
    }
  }
}

export default MealService;
