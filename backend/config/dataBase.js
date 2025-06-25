const mongoose = require("mongoose");

const URI = process.env.URI


const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connected");
    }catch (error){
        console.error(err);
    }
}

module.exports =  connectDB;