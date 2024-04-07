import express from "express";
import {signUp,login} from "../controller/auth.controller.js";


const authRouter = express.Router();


authRouter
    .route('/login')
    .post(login);

authRouter
    .route('/signup')
    .post(signUp);

export default authRouter;