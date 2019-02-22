import mealData from "../utils/mealData";
import Meal from "../models/meal.model";

const MealService = {
  fetchAllMeals() {
    const validMeals = mealData.meals.map(meal => {
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
    const mealLength = mealData.meals.length;
    const lastId = mealData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    mealData.meals.push(meal);
    return meal;
  },
  getAMeal(id) {
    const meal = mealData.meals.find(meal => meal.id == id);
    return meal || {};
  },

  updateAMeal(id, mealUpdate) {
    const updatedMeal = mealData.meals.find(meal => meal.id == id);
    updatedMeal.name = mealUpdate.name;
    updatedMeal.price = mealUpdate.price;
    updatedMeal.size = mealUpdate.size;
    return updatedMeal;
  },
  deleteAMeal(id) {
    const i = mealData.meals.findIndex(meal => meal.id == id);
    const filteredmeals = mealData.meals
      .slice(0, i)
      .concat(mealData.meals.slice(i + 1, mealData.meals.length));
    return filteredmeals;
  }
};

export default MealService;
