import { Router } from "express";
import MealController from "../controllers/meal.controller";
import AuthMiddleware from "../middlewares/auth.middleware";
import PermissionMiddleWare from "../middlewares/permission.middleware";

const router = Router();

router.get(
  "/",
  AuthMiddleware,
  PermissionMiddleWare,
  MealController.fetchAllMeals
);
router.post("/", AuthMiddleware, PermissionMiddleWare, MealController.addAMeal);
router.get(
  "/:id",
  AuthMiddleware,
  PermissionMiddleWare,
  MealController.getAMeal
);
router.put(
  "/:id",
  AuthMiddleware,
  PermissionMiddleWare,
  MealController.updateAMeal
);
router.delete(
  "/:id",
  AuthMiddleware,
  PermissionMiddleWare,
  MealController.deleteAMeal
);

export default router;
