import express from  "express";
import { createBooking, getUserBookings } from "../controllers/bookingController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", auth, createBooking);
router.get("/my", auth, getUserBookings);

export const bookingRoutes = router;