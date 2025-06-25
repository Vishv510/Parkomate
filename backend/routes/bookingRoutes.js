import express from  "express";
import { createBooking, getUserBookings } from "../controllers/bookingController";
import auth from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", auth, createBooking);
router.get("/my", auth, getUserBookings);

module.exports = router;