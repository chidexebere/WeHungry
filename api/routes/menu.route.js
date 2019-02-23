import { Router } from "express";

// controller
import MenuController from "../controllers/menu.controller";

const router = Router();

router.post("/", MenuController.createMenu);
router.get("/", MenuController.fetchTodaysMenu);
router.delete("/:id", MenuController.deleteAMenu);

export default router;
