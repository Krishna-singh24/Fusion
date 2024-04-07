import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import {dispatchJsonToken} from "../utils/dispatchJsonToken.js";
export const signUp = async (req, res, next) => {
    try {
        const {email, password, username} = req.body;
        const existingUser = await User.findOne({
                email: email,
        });
        if (existingUser) {

            res.status(400).json({
                message: "User already exists",
            });
            return new Error("User already exists");
        }
        console.log("Creating User")
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const data = {
            email,
            password: hashedPassword,
            username
        };
        await User.create(data);

        res.status(201).json({
            message: "Successfully Created",
        });
    } catch (e) {
        next(e);
    }
};


export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user =await  User.findOne({email: email});
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return new Error("User not found");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({
                message: "Invalid Credentials",
            });
            return new Error("Invalid Credentials");
        }
        dispatchJsonToken(user, 201, res);
    } catch (e) {
        next(e);
    }
};