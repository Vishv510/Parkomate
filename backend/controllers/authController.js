import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "../model/User.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
    const { name, email, password, role} = req.body;

    try{
        const existing = await User.findOne({email});
        if(existing) {
            res.status(400).json({
                massage: "User already exists"
            });
            return ;
        }

        const hash = await bcrypt.hash(password, 5);
        const user = await User.create({ name, email, password: hash, role });
        
        res.json({
            message: "Registered successfully"
        });
    }catch(error){
        console.error(error);
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });

        if(!user || !(await bcrypt.compare(password, user.password))){
            res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);

        res.json({token, user});
    }catch(error){
        console.error(error);
    }
}