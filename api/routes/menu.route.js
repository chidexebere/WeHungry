import { Router } from "express";

// controller
import MenuController from "../controllers/menu.controller";

const router = Router();

router.post("/", MenuController.createMenu);
router.get("/", MenuController.fetchTodaysMenu);

export default router;
