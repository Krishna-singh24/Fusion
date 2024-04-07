import jwt from "jsonwebtoken";
import pair from "../utils/keyPair.js";
import {User} from "../models/user.model.js";
export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1] || req.cookies.token;
        if (!token) {
            res.status(400).json({
                message: "Login Required",
            });
            return new Error("Login Required");
        }
        const decodedData = await jwt.verify(token, pair.public, {
            algorithms: ["RS256"],
        });
        req.user = await User.findById(decodedToken?._id).select("-password")
        if (!token) {
            res.status(400).json({
                message: "Login Required",
            });
            return new Error("Login Required");
        }
        next();
    } catch (error) {
        next(error);
    }
};