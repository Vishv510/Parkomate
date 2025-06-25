import express from "express";
import connectDB from "./config/dataBase";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import parkingLotRoutes from "./routes/parkingLotRoutes";
import bookingRoutes from "./routes/bookingRoutes";



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