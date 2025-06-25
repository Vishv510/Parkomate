import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.URI


const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connected");
    }catch (error){
        console.error(error);
    }
}

export default connectDB;