import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const token = req.header("Autheorization");

    if(!token){
        res.status(401).json({
            message: "No token, authorization denied"
        });
        return ;
    }

    try{
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    }catch (error){
        res.json(400).json({
            message: "token is not valid"
        })
    }
};

export default authMiddleware;