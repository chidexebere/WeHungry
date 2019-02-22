import { Router } from "express";

// controller
import OrderController from "../controllers/order.controller";

const router = Router();

router.post("/", OrderController.createAnOrder);
router.put("/:id", OrderController.editAnOrder);
router.get("/", OrderController.fetchAllOrders);

export default router;
