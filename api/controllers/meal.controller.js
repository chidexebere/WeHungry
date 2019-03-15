import MealService from "../services/meal.service";

/**
 * caterer meal controller performs controls  request and res -
 * fetching all meal
 * adding a new meal
 * getting a particular meal
 * updating an existing meal and
 * deleting a meal
 */

class MealController {
  /**
   * @description retrieve and return all meals requested by the currently logged in user
   * @param {object} req
   * @param {object} res
   * @returns {Array} meal object
   */
  static async fetchAllMeals(req, res) {
    try {
      const { user_id } = req.token;
      const allMeals = await MealService.fetchAllMeals(user_id);
      if (allMeals.length === 0) {
        res.status(200, "No meal found!");
      } else {
        res.status(200, "Meals was successfully fetched!", allMeals);
      }
      return res;
    } catch (error) {
      res.error(400, error);
      return res;
    }
  }

  /**
   * @description create a meal record with the id of the curently logged in user
   * @param {object} req
   * @param {object} res
   * @returns {object} apiResponse
   */
  static async addAMeal(req, res) {
    if (
      !req.body.name ||
      !req.body.price ||
      !req.body.size ||
      !req.body.imageUrl
    ) {
      res.error(400, "All parameters are required");
      return res;
    }
    const newMeal = req.body;
    const { user_id } = req.token;
    newMeal.caterer_id = user_id;

    try {
      const createdMeal = await MealService.addAMeal(newMeal);
      res.status(201, "Meal successfully added!", createdMeal);
      return res;
    } catch (error) {
      res.error(400, error.message);
      return res;
    }
  }

  /**
   * @description update a meal record belong to the currently logged in user
   * @param {object} req
   * @param {object} res
   * @returns {object} apires
   */
  static async updateAMeal(req, res) {
    const newMeal = req.body;
    const { id } = req.params;
    const { user_id } = req.token;

    if (Number.isNaN(Number(id))) {
      res.status(400, "Invalid ID. ID must be a number");
      return res;
    }

    try {
      const updateMeal = await MealService.updateAMeal(id, newMeal, user_id);

      if (updateMeal === null) {
        res.error(400, `Meal with id ${id} cannot be found`);
      } else {
        res.status(200, "Meal was successfully updated", updateMeal);
      }
      return res;
    } catch (error) {
      res.error(400, error);
      return res;
    }
  }

  /**
   * @description get a specific meal belonging to the currently logged in user
   * @param {object} req
   * @param {object} res
   * @returns {object} found meal
   */
  static async getAMeal(req, res) {
    const { id } = req.params;
    const { user_id } = req.token;

    if (Number.isNaN(Number(id))) {
      res.error(400, "Invalid ID. ID must be a number");
      return res;
    }

    try {
      const foundMeal = await MealService.getAMeal(id, user_id);

      if (foundMeal === null) {
        res.error(404, "Meal cannot be found");
      } else {
        res.status(200, null, foundMeal);
      }
      return res;
    } catch (error) {
      res.error(400, error);
      return res;
    }
  }

  /**
   * @description delete a specific meal belonging to the currently logged in user
   * @param {object} req
   * @param {object} res
   * @returns {object} res
   */
  static async deleteAMeal(req, res) {
    const { id } = req.params;
    const { user_id } = req.token;

    if (Number.isNaN(Number(id))) {
      res.error(400, "Invalid ID. ID must be a number");
      return res;
    }

    try {
      const deletedRecord = await MealService.deleteAMeal(id, user_id);

      if (deletedRecord === 1) {
        res.status(200, "Meal was successfully deleted");
      } else {
        res.error(404, `Meal with id ${id} cannot be found`);
      }
      return res;
    } catch (error) {
      res.error(400, error);
      return res;
    }
  }
}

export default MealController;
