import express from  "express";
import { createParkingLot, getNearbyParkingLots } from "../controllers/parkingLotController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", auth , createParkingLot);
router.get('"/nearby', getNearbyParkingLots);

export const parkingLotRoutes = router;
