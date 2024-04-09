import express from "express";
import {createFeedback} from "../controller/feedback.controller.js";
const feedbackRouter = express.Router();


feedbackRouter
    .route('/feedback')
    .post(createFeedback);


export default feedbackRouter;