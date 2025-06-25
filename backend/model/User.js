import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {type: String, require:true},
    email: {type : String, unique: true, require:true},
    password: {type: String, require: true},
    role: {type: String, enum: ['User' , 'Owner'] , default: 'user'},
})

export const User = mongoose.model("User", userSchema);