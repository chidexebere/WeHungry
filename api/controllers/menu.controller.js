import MenuService from "../services/menu.service";

/**
 * menu controller performs controls  request and res -
 * setup menu for the day and
 * fetch menu for the day
 */
class MenuController {
  /**
   * @description add a meal to today menu
   * @param {object} req
   * @param {object} res
   * @returns {object} apiResponse
   */
  static async setUpMenu(req, res) {
    const { id } = req.body;
    const { user_id } = req.token;

    if (!id) {
      res.error(400, "meal id is required");
      return res;
    }
    if (Number.isNaN(Number(id))) {
      res.error(400, "Invalid ID. ID must be a number");
      return res;
    }

    try {
      const addedMeal = await MenuService.setUpMenu(id, user_id);
      const [rowsUpdate, [updatedMeal]] = addedMeal;

      if (rowsUpdate > 0) {
        res.status(201, "Meal successfully added to Menu List", updatedMeal);
      }
      return res;
    } catch (error) {
      res.error(400, error.message);
      return res;
    }
  }

  /**
   * @description retrieve and return menu for the day
   * @param {object} req
   * @param {object} res
   * @returns {Array} menu object array
   */
  static async fetchMenu(req, res) {
    try {
      const allMenu = await MenuService.fetchMenu();

      if (allMenu.length === 0) {
        res.status(200, "Menu list for today is empty");
      } else {
        res.status(200, null, allMenu);
      }
      return res;
    } catch (error) {
      res.error(400, error.message);
      return res;
    }
  }
}

export default MenuController;
