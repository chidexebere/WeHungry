import dummyData from "../utils/dummyData";
import Meal from "../models/meal.model";

const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map(meal => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return validMeals;
  },
  addAMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },
  getAMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id == id);
    return meal || {};
  },

  updateAMeal(id, mealUpdate) {
    const updatedMeal = dummyData.meals.find(meal => meal.id == id);
    updatedMeal.name = mealUpdate.name;
    updatedMeal.price = mealUpdate.price;
    updatedMeal.size = mealUpdate.size;
    return meals;
  },
  deleteAMeal(id) {
    const i = dummyData.meals.findIndex(meal => meal.id == id);
    const filteredmeals = dummyData.meals
      .slice(0, i)
      .concat(dummyData.meals.slice(i + 1, dummyData.meals.length));
    return filteredmeals;
  }
};

export default MealService;
