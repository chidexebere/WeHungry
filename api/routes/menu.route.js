import { Router } from "express";
import MenuController from "../controllers/menu.controller";
import AuthMiddleware from "../middlewares/auth.middleware";
import PermissionMiddleWare from "../middlewares/permission.middleware";

const router = Router();

router.get("/", AuthMiddleware, MenuController.fetchMenu);
router.post(
  "/",
  AuthMiddleware,
  PermissionMiddleWare,
  MenuController.setUpMenu
);

export default router;
