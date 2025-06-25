import express from "express";
import connectDB from "./config/dataBase.js";
import cors from "cors";
import dotenv from "dotenv";
import {authRoutes} from "./routes/authRoutes.js";
import {userRoutes} from "./routes/userRoutes.js";
import {parkingLotRoutes} from "./routes/parkingLotRoutes.js";
import {bookingRoutes} from "./routes/bookingRoutes.js";



const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/parking", parkingLotRoutes);
app.use("/api/booking", bookingRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Backend is running on localhost:${PORT}`)
});