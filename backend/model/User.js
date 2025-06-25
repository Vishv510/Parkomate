import mongoose, { Shcema } from 'mongoose';

const userSchema = new Shcema({
    name: {type: String, required},
    email: {type : String, unique: true},
    password: String,
    role: {type: String, enum: ['User' , 'Owner'] , default: 'user'},
})

module.exports = mongoose.model("User", userSchema);