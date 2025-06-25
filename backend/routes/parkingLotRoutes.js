import express from  "express";
import { createParkingLot, getNearbyParkingLots } from "../controllers/parkingLotController";
import auth from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", auth , createParkingLot);
router.get('"/nearby', getNearbyParkingLots);

module.exports = router;
