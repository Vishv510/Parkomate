import express from  "express";
import { getProfile } from "../controllers/userController";
import auth from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/me", auth, getProfile);

module.exports = router;