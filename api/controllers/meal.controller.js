import MealService from "../services/meal.service";

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res
      .json({
        status: "success",
        data: allMeals
      })
      .status(200);
  },
  addAMeal(req, res) {
    /*
            Expect json of the format
            {
                name: "some food",
                size: "LArge",
                "price": 900
            }
        */
    const newMeal = req.body;
    const createdMeal = MealService.addAMeal(newMeal);
    return res
      .json({
        status: "success",
        data: createdMeal
      })
      .status(201);
  },
  getAMeal(req, res) {
    const id = req.params.id;
    const foundMeal = MealService.getAMeal(id);
    return res
      .json({
        status: "success",
        data: foundMeal
      })
      .status(200);
  },
  updateAMeal(req, res) {
    /*
            Enter json of the format
            {
                name: "some food",
                size: "LArge",
                "price": 900
            }
        */
    const id = req.params.id;
    const mealUpdate = req.body;
    const updatedMeal = MealService.updateAMeal(id, mealUpdate);
    return res
      .json({
        status: "success",
        data: updatedMeal
      })
      .status(200);
  },
  deleteAMeal(req, res) {
    const id = req.params.id;
    const filteredmeals = MealService.deleteAMeal(id);
    return res
      .json({
        status: "success",
        data: filteredmeals
      })
      .status(204);
  }
};

export default MealController;
