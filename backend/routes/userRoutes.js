import express from  "express";
import { getProfile } from "../controllers/userController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/me", auth, getProfile);

export const userRoutes = router;